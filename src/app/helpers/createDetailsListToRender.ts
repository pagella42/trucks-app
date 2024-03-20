import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";

type ListToRenderConfig<T> = {
  items: (keyof T)[];
  source: T;
};

export function createDetailsListToRender(
  configs: Array<ListToRenderConfig<any>>
): { label: string; value: string | number | undefined }[] {
  return configs.flatMap(({ items, source }) =>
    items
      .map((item) => {
        const value = source[item];
        if (typeof value === "string" || typeof value === "number") {
          return { label: camelCaseToRegularText(item as string), value };
        }
        return undefined;
      })
      .filter(
        (item): item is { label: string; value: string | number } =>
          item !== undefined
      )
  );
}
