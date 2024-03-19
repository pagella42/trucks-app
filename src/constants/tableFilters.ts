export const BASIC_EMPTY = "All";

export const BasicCategories = [
  BASIC_EMPTY,
  "Driver Fitness",
  "Drugs/Alcohol",
  "HM Compliance",
  "HOS Compliance",
  "Unsafe Driving",
  "Vehicle Maintenance",
];
export type BasicCategoryType = (typeof BasicCategories)[number];

export const DateSorting = {
  ASC: "ASC",
  DESC: "DESC",
};

export type DateSortingType = typeof DateSorting[keyof typeof DateSorting];
