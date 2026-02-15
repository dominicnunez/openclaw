export type EmbeddedContextFile = { path: string; content: string };

export type FailoverReason = "auth" | "format" | "rate_limit" | "billing" | "timeout" | "unknown";

export type ErrorKind =
  | "billing"
  | "rate_limit"
  | "timeout"
  | "auth"
  | "context_overflow"
  | "overloaded"
  | "format"
  | "compaction_failure"
  | "role_ordering"
  | "image_size"
  | "unknown";
