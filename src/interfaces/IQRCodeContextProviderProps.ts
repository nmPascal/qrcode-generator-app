import { ChangeEvent } from "react";
import { EQRVisionType, ESettingsControlType } from "./Enums";

export interface IQRCodeContextProviderProps {
    selectedTab: string;
    urlValue: string;
    urlFeedback: IUrlResponse | null;
    global: IGlobalSettings | null;
    vision: IQRVisionSettings | null;
    logo: ILogoSettings | null;
    isControlsDisabled: boolean;
    getSettingsTabOptions: () => ISettingOption[];
    setSelectedTab: (value: string) => void;
    updateUrlValue: (value: string) => void;
    updateQRGlobalSettings: (ev: ChangeEvent<HTMLInputElement>) => void;
    updateQRVisionSettings: (ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, type: EQRVisionType) => void;
    updateQRLogoSettings: (ev: ChangeEvent<HTMLInputElement>) => void;
    saveOrResetSettings: (controlType: ESettingsControlType) => void;
}

export interface ISettingOption {
    value: string;
    label: string;
}

export interface IUrlResponse {
    validationState: "success" | "error" | "warning";
    validationMessage: string;
}

export interface IQRCodeSettings {
    urlValue: string;
    global: IGlobalSettings;
    vision: IQRVisionSettings;
    logo: ILogoSettings;
}

export interface IGlobalSettings {
    size: number;
    quietZone: number;
    bgColor: string;
    fgColor: string;
}

export interface IQRVisionSettings {
    dot: IDotSettings;
    eye: IEyeSettings;
}

export interface IDotSettings {
    ecLevel: string;
    qrStyle: string;
}

export interface IEyeSettings {
    eyeRadius: string;
    eyeColor: string;
}

export interface ILogoSettings {
    logoImage: string;
    width: number;
    height: number;
    opacity: number;
}
