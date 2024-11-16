import e from "express";
import { useState } from "react";

const isBrowser = typeof window !== "undefined";
export const useLocalStorage = (key, initalValue) => {
  if (!isBrowser) {
    return [initalValue, () => {}];
  }

  if (!key) {
    throw new Error("localstorage is not found or may not be faly");
  }

  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initalValue;

  const [value, setvalue] = useState(initial);

  const set = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setvalue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setvalue(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  return [value, set, remove];
};
