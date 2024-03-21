import { RenderableListItemType } from "@/utils/getRenderableListFromObject";

//function that filters out any non string|number values from the list and filters from only the desired items
export function getDesiredMainDetails<T>(
  data: RenderableListItemType<T>[],
  desired: (keyof T)[]
) {
  return data.filter(
    (item) =>
      desired.includes(item.label as keyof T) &&
      (typeof item.value === "number" || typeof item.value === "string")
  ) as RenderableListItemType<T, string>[];
}
