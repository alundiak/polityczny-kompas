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
  scattersIds: string[];
  showAndrii: boolean;
  showAndriiLang: boolean;
}

export interface LabeledCheckboxProps {
  scatterId: string;
  isChecked: boolean;
  onChangeHandler: (currentScatterId: string) => void;
  label: string;
}

export interface WarningMessageProps {
  duplicateCoordinates: Person[];
}
