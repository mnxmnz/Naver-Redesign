import { atom } from 'recoil';

export const mainDataAtom = atom({
  key: 'mainAtom',
  default: [],
});

export const sportsDataAtom = atom({
  key: 'sportsAtom',
  default: [],
});
