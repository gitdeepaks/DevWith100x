import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

export const evenSelector = selector({
  key: "isEvenSelector",
  get: function ({ get }) {
    const currCount = get(counterAtom);
    const isEven = currCount % 2 == 0;
    return isEven;
  },
});
