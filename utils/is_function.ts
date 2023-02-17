export function isFunction<T extends Function>(fn: any): fn is T {
  return typeof fn === "function";
}
