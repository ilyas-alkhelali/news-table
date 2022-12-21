import { IOption } from "../models/IOption";

export const useConvertToArray = (items: object) => {
  let array = [];
  for (let item in items) {
    array.push(item);
  }
  return { array };
};

export const useConvertToOptionsArray = (obj: object) => {
  const optionsArray: IOption[] = [];
  const propertiesArray = Object.entries(obj);
  propertiesArray.map((property) => {
    optionsArray.push({ name: property[0], value: property[1] });
  });
  return { optionsArray };
};
