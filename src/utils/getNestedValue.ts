export function getNestedValue<T, K extends keyof T>(
  obj: T,
  path: string
): any {
  const parsedPath = path.replace(/\[(\w+)\]/g, ".$1");
  const keys: string[] = parsedPath.split(".");
  let result: any = obj;

  for (let key of keys) {
    if (result === null || result === undefined) {
      return undefined;
    }
    result = result[key as keyof typeof result];
  }

  return result;
}
