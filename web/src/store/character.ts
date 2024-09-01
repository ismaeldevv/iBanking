import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { isEnvBrowser } from '../utils/misc';

interface Character {
    cash: number;
    id: string;
    name: string;
}

const DEBUG_CHARACTER: Character = {
  cash: 0,
  id: '',
  name: ''
};

const characterAtom = atom<Character>(isEnvBrowser() ? DEBUG_CHARACTER : { cash: 0, id: '', name: '' });
export const useCharacter = () => useAtomValue(characterAtom);
export const useSetCharacter = () => useSetAtom(characterAtom);
export const useCharacterState = () => useAtom(characterAtom);