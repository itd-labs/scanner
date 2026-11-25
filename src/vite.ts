export function extractViteDependencyFiles(source: string): string[] {
  const map = source.match(
    /__vite__mapDeps[\s\S]{0,500}?\.f\s*\|\|\s*\([^=]*=\s*\[([\s\S]*?)\]\s*\)/u,
  )?.[1];
  if (!map) return [];
  return [...map.matchAll(/["']([^"']+\.(?:m?js|css))["']/gu)]
    .map((match) => match[1])
    .filter((value): value is string => value !== undefined);
}
