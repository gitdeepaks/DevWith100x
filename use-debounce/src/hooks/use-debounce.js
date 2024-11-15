import { useEffect, useState } from "react";

export const useDebounce = (value, delay, cb) => {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value);
      cb();
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
