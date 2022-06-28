export interface IData {
  dt: string;
  age: number | null;
  quantity: number;
  temp: ITemp;
};
export interface ITemp {
  temperature: string;
  city: string;
  optional?: boolean;
};
export type DataArray = IData[];
