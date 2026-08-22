import { dirname, isAbsolute, parse, relative, resolve, sep } from "node:path";
import path from "node:path/posix";

export function assertSafeDirectory(
  target: string,
  workspace = process.cwd(),
): string {
  const resolvedTarget = resolve(target);
  const resolvedWorkspace = resolve(workspace);
  const filesystemRoot = parse(resolvedTarget).root;

  if (
    resolvedTarget === filesystemRoot ||
    resolvedTarget === resolvedWorkspace
  ) {
    throw new Error(
      `Refusing to use broad directory as generated output: ${resolvedTarget}`,
    );
  }

  const relation = relative(resolvedWorkspace, resolvedTarget);
  if (
    relation.startsWith(`..${sep}`) ||
    relation === ".." ||
    isAbsolute(relation)
  ) {
    const githubWorkspace = process.env.GITHUB_WORKSPACE;
    if (!githubWorkspace) {
      throw new Error(
        `Output must stay inside the workspace: ${resolvedTarget}`,
      );
    }
    const githubRelation = relative(resolve(githubWorkspace), resolvedTarget);
    if (
      githubRelation.startsWith(`..${sep}`) ||
      githubRelation === ".." ||
      isAbsolute(githubRelation)
    ) {
      throw new Error(
        `Output must stay inside GITHUB_WORKSPACE: ${resolvedTarget}`,
      );
    }
  }

  return resolvedTarget;
}

export function safeMirrorPath(url: URL): string {
  const segments = url.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));
  if (
    segments.some(
      (segment) =>
        segment === "." || segment === ".." || /[<>:"|?*/\\\0]/u.test(segment),
    )
  ) {
    throw new Error(`Unsafe resource path: ${url.pathname}`);
  }
  if (segments.length === 0 || url.pathname.endsWith("/"))
    segments.push("index.html");
  if (url.search) {
    const last = segments.at(-1) ?? "resource";
    segments[segments.length - 1] = `${last}.query-${shaQuery(url.search)}`;
  }
  return segments.join("/");
}

function shaQuery(query: string): string {
  let hash = 0;
  for (const character of query)
    hash = Math.imul(31, hash) + character.charCodeAt(0);
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export function relativeImport(
  fromLogicalPath: string,
  toLogicalPath: string,
): string {
  let result = path.relative(
    dirname(fromLogicalPath).replaceAll("\\", "/"),
    toLogicalPath,
  );
  result = result.replaceAll("\\", "/");
  if (!result.startsWith(".")) result = `./${result}`;
  return result;
}

export function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/gu, "$1-$2")
    .replace(/[^A-Za-z0-9]+/gu, "-")
    .replace(/^-|-$/gu, "")
    .toLowerCase();
}
