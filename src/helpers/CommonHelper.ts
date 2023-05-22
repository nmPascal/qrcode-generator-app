import { ESettingOpts } from "../interfaces/Enums";
import { ISettingOption, IUrlResponse } from "../interfaces/IQRCodeContextProviderProps";

export const generateSettingOptsObj = (): ISettingOption[] => {
    const settingsOptsObj: {value: string, label: string}[] = [];
    Object.keys(ESettingOpts).filter(key => isNaN(Number(key))).forEach((key) => {
        settingsOptsObj.push({value: key.toLocaleLowerCase(), label: key});
    });
    return settingsOptsObj;
};

export const checkUrl = (url: string): IUrlResponse => {
    if (!url.length) {
        return {
            validationState: "error",
            validationMessage: "URL is required.",
        };
    }

    const regex = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.[a-zA-Z]{2,}$/);
    if (!regex.test(url)) {
        return {
            validationState: "warning",
            validationMessage: "URL is invalid.",
        };
    }

    return {
        validationState: "success",
        validationMessage: "URL is valid.",
    };
};