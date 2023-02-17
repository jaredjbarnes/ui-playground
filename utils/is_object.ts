export function isObject<T extends object>(obj: T): obj is T {
  return typeof obj === "object" && obj != null;
}
