export type ResourceKind =
  "html" | "javascript" | "css" | "json" | "image" | "font" | "other";

export interface ScannerConfig {
  target: string;
  output: string;
  requestTimeoutMs: number;
  retries: number;
  maxResources: number;
  maxResourceBytes: number;
  maxTotalBytes: number;
  userAgent: string;
}

export interface DownloadedResource {
  url: string;
  requestedUrl: string;
  originalPath: string;
  kind: ResourceKind;
  mediaType: string;
  bytes: Uint8Array;
  sha256: string;
  etag?: string;
  lastModified?: string;
  text?: string;
  discoveredFrom?: string;
}

export interface ResourceGraph {
  target: string;
  documentUrl: string;
  resources: Map<string, DownloadedResource>;
  urlAliases: Map<string, string>;
  entryScripts: string[];
  entryStyles: string[];
}

export interface ResourceSignature {
  shapeHash: string;
  minhash: string[];
}

export interface ManifestResource extends ResourceSignature {
  sourceUrl: string;
  originalPath: string;
  logicalPath: string;
  kind: ResourceKind;
  mediaType: string;
  bytes: number;
  sha256: string;
  etag?: string;
  lastModified?: string;
}

export interface AnalysisReport {
  routes: string[];
  endpoints: string[];
  webSockets: string[];
  storageKeys: string[];
  userVisibleStrings: string[];
  sentryReleases: string[];
}

export interface SnapshotManifest {
  schemaVersion: 1;
  generator: {
    name: "itd-scanner";
    version: string;
    normalizationVersion: number;
    wakaruLevel: "minimal";
  };
  target: string;
  documentUrl: string;
  buildFingerprint: string;
  entrypoints: string[];
  resources: ManifestResource[];
  analysis: AnalysisReport;
}

export interface LogicalResource extends DownloadedResource, ResourceSignature {
  logicalPath: string;
}

export interface ScanOptions {
  configPath: string;
  output?: string;
  mirror?: string;
  useWakaru: boolean;
}

export interface ScanResult {
  changed: boolean;
  fingerprint: string;
  resourceCount: number;
  output: string;
}
