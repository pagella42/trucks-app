import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";

type ListToRenderConfig<T> = {
  items: (keyof T)[];
  source: T;
};

export function getDetailsListToRender<K>({
  items,
  source,
}: ListToRenderConfig<K>): { label: string; value: string }[] {
  return items
    .map((item) => {
      const value = source[item];
      if (typeof value === "string" || typeof value === "number") {
        return {
          label: camelCaseToRegularText(item as string),
          value: value.toString(),
        };
      }
      return undefined;
    })
    .filter(
      (item): item is { label: string; value: string } => item !== undefined
    );
}
