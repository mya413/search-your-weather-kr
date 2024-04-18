import { location } from "./location";

export interface locationInfo {
  id: string;
  nx: number;
  ny: number;
  title: string[];
}

export const filteredLocationTitle = (value: string) => {
  return location.filter((item) => item.title.includes(value));
};

export const filteredLocationId = (id: string) => {
  return location.filter((loc) => loc.id === id);
};
