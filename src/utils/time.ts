import { today } from "./date";

export const hours = String(today.getHours()).padStart(2, "0");
export const minutes = String(today.getMinutes()).padStart(2, "0");
export const seconds = String(today.getSeconds()).padStart(2, "0");
