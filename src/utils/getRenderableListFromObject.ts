export type RenderableListItemType<K, V = K[keyof K]> = {
    label: string;
    value: V;
  };
export function getRenderableListFromObject<T extends Record<string, any>>(
  data: T
): Array<RenderableListItemType<T>> {
  return (Object.keys(data) as Array<keyof T>).map((key) => ({
    label: key.toString(),
    value: data[key],
  }));
}
