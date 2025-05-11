export type DataKind =
  | "poland2025"
  | "polandOther"
  | "world"
  | "america"
  | "uk"
  | "scandinavia"
  | "baltics"
  | "europe"
  | "russia"
  | "ukraine"
  | "world";

export interface Person {
  firstName?: string;
  lastName: string;
  flag?: string;
  x: number;
  y: number;
}

export interface CompassData {
  [key: string]: Person[];
}

export interface PoliticalCompassChartProps {
  data: CompassData;
  scattersIds: DataKind[];
}

export interface LabeledCheckboxProps {
  scatterId: DataKind;
  isChecked: boolean;
  onChangeHandler: (currentScatterId: DataKind) => void;
  label: string;
}

export interface WarningMessageProps {
  duplicateCoordinates: Person[];
}
