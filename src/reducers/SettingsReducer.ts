import { IGlobalSettings, ILogoSettings, IQRVisionSettings } from "../interfaces/IQRCodeContextProviderProps";

export const ACTIONS = {
    SET_ALL_SETTINGS: "SET_ALL_SETTINGS",
    SET_URL_VALUE: "SET_URL_VALUE",
    SET_GLOBAL_SETTINGS: "SET_GLOBAL_SETTINGS",
    SET_QR_VISION_SETTINGS: "SET_QR_VISION_SETTINGS",
    SET_LOGO_SETTINGS: "SET_LOGO_SETTINGS",
};

export const SettingsReducer = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state: any,
    action: {
        type: string;
        urlValue?: string;
        global?: IGlobalSettings;
        vision?: IQRVisionSettings;
        logo?: ILogoSettings
    }
) => {
    switch (action.type) {
        case ACTIONS.SET_URL_VALUE:
            return { ...state, urlValue: action.urlValue };
        case ACTIONS.SET_GLOBAL_SETTINGS:
            return { ...state, global: action.global };
        case ACTIONS.SET_QR_VISION_SETTINGS:
            return { ...state, vision: action.vision };
        case ACTIONS.SET_LOGO_SETTINGS:
            return { ...state, logo: action.logo };
        case ACTIONS.SET_ALL_SETTINGS:
            return {
                ...state,
                urlValue: action.urlValue,
                global: action.global,
                vision: action.vision,
                logo: action.logo,
            };
        default:
            return state;
    }
};