export type StepState = "done" | "current" | "upcoming";

export interface StepItem {
  id: number;
  label: string;
  state: StepState;
}

export interface ModelItem {
  name: string;
  year: number;
}

export interface DeviceItem {
  name: string;
  icon?: string;
  description?: string;
}
