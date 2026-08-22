import { createHash } from "node:crypto";

export function sha256(data: string | Uint8Array): string {
  return createHash("sha256").update(data).digest("hex");
}

export function buildFingerprint(
  resources: Iterable<{ url: string; sha256: string }>,
): string {
  const lines = [...resources]
    .map(({ url, sha256: digest }) => `${url}\0${digest}`)
    .sort();
  return sha256(lines.join("\n"));
}

const TOKEN_PATTERN =
  /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(?:[A-Za-z_$][\w$]*)|(?:0x[\da-f]+|\d+(?:\.\d+)?)|(?:=>|===|!==|==|!=|<=|>=|\?\?|\?\.|&&|\|\||\+\+|--|\*\*)|[^\s]/giu;

const KEYWORDS = new Set([
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "from",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "let",
  "new",
  "null",
  "of",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "undefined",
  "var",
  "void",
  "while",
  "with",
  "yield",
]);

export function normalizedStructuralTokens(source: string): string[] {
  const withoutBuildMetadata = source
    .replace(
      /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/giu,
      "<uuid>",
    )
    .replace(
      /([A-Za-z][A-Za-z0-9_.-]*?)-[A-Za-z0-9_-]{8}(?=\.(?:js|css))/gu,
      "$1-<hash>",
    );

  return [...withoutBuildMetadata.matchAll(TOKEN_PATTERN)].map(([token]) => {
    if (/^[A-Za-z_$][\w$]*$/u.test(token)) {
      return KEYWORDS.has(token) ? token : "<id>";
    }
    if (/^(?:0x[\da-f]+|\d+(?:\.\d+)?)$/iu.test(token)) {
      return "<number>";
    }
    return token;
  });
}

function fnv1a(value: string, seed: number): number {
  let hash = (0x811c9dc5 ^ seed) >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
}

export function structuralSignature(source: string): {
  shapeHash: string;
  minhash: string[];
} {
  const tokens = normalizedStructuralTokens(source);
  const shingles = new Set<string>();
  const width = Math.min(5, Math.max(1, tokens.length));
  for (let index = 0; index <= tokens.length - width; index += 1) {
    shingles.add(tokens.slice(index, index + width).join("\u001f"));
  }
  if (shingles.size === 0) shingles.add("");

  const minhash = Array.from({ length: 32 }, (_, seed) => {
    let minimum = 0xffff_ffff;
    for (const shingle of shingles)
      minimum = Math.min(minimum, fnv1a(shingle, seed));
    return minimum.toString(16).padStart(8, "0");
  });

  return {
    shapeHash: sha256(tokens.join("\u001f")),
    minhash,
  };
}

export function minhashSimilarity(left: string[], right: string[]): number {
  const length = Math.min(left.length, right.length);
  if (length === 0) return 0;
  let equal = 0;
  for (let index = 0; index < length; index += 1) {
    if (left[index] === right[index]) equal += 1;
  }
  return equal / length;
}
