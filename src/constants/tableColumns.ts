// Enum or object for column labels
export const ColumnLabels = {
  DATE: "Date",
  STATE: "State",
  INSPECTION_NUMBER: "Insp. Number",
  TRACTOR_PLATE: "Tractor Plate",
  BASIC: "BASIC (Vio. #1)",
  WEIGHT: "Weight",
  DETAILS: "Details",
};

// Table columns using the labels from ColumnLabels
export const tableColumns = [
  {
    label: ColumnLabels.DATE,
    key: "inspection_date",
  },
  {
    label: ColumnLabels.STATE,
    key: "report_state",
  },
  {
    label: ColumnLabels.INSPECTION_NUMBER,
    key: "report_number",
  },
  {
    label: ColumnLabels.TRACTOR_PLATE,
    key: "vehicles[0].license_number",
    nested: true,
  },
  {
    label: ColumnLabels.BASIC,
    key: "violations[0].BASIC",
  },
  {
    label: ColumnLabels.WEIGHT,
    key: "time_weight",
  },
  {
    label: ColumnLabels.DETAILS,
  },
];
