export interface Person {
  name: string;
  x: number;
  y: number;
}

export interface CompassData {
  [key: string]: Person[];
}

export interface PoliticalCompassChartProps {
  data: CompassData;
  showPoland2025: boolean;
  showOtherPoland: boolean;
}
