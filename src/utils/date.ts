export const today = new Date();

export const year = String(today.getFullYear());
export const month = String(today.getMonth() + 1).padStart(2, "0");
export const day = String(today.getDate()).padStart(2, "0");
