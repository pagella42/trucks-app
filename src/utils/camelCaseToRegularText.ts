export function camelCaseToRegularText(input: string): string {
  if (input === null || input === undefined) {
    return "";
  }
  const result = input
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());

  return result;
}
