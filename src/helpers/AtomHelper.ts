import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IQRCodeSettings } from '../interfaces/IQRCodeContextProviderProps';

export const isDarkThemeAtom = atomWithStorage<boolean>('my_qrcode_app_darkTheme', false);
export const storagedSettingsAtom = atomWithStorage<IQRCodeSettings | null>('my_qrcode_app_settings', null);
export const isPanelOpenAtom = atom<boolean>(false);