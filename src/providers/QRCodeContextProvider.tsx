import { ReactNode, createContext, useContext, useReducer, useEffect, useState, ChangeEvent, FormEvent } from "react";

import { checkUrl, generateSettingOptsObj } from "../helpers/CommonHelper";
import SettingsHelper from "../helpers/SettingsHelper";
import { storagedSettingsAtom } from "../helpers/AtomHelper";

import { IQRCodeContextProviderProps, ISettingOption, IUrlResponse } from "../interfaces/IQRCodeContextProviderProps";

import { SettingsReducer } from "../reducers/SettingsReducer";

import { useAtom } from "jotai";
import { EQRVisionType, ESettingsControlType } from "../interfaces/Enums";

const QRCodeContext = createContext<IQRCodeContextProviderProps>({
    selectedTab: "",
    urlValue: "",
    urlFeedback: null,
    global: null,
    vision: null,
    logo: null,
    isControlsDisabled: true,
    getSettingsTabOptions: () => [],
    setSelectedTab: () => [],
    updateUrlValue: () => [],
    updateQRGlobalSettings: () => [],
    updateQRVisionSettings: () => [],
    updateQRLogoSettings: () => [],
    saveOrResetSettings: () => [],
});

// eslint-disable-next-line react-refresh/only-export-components
export const useQRCodeContextProvider = () => useContext(QRCodeContext);

type Props = {
    children: ReactNode;
};

export const QRCodeContextProvider = ({ children }: Props) => {
    const defaultSettings = SettingsHelper.defaultQRCodeSettings;

    const [storagedSettings, setStoragedSettings] = useAtom(storagedSettingsAtom);

    const [state, dispatch] = useReducer(SettingsReducer, defaultSettings);

    const [selectedTab, setSelectedTab] = useState<string>("url");
    const [urlFeedback, setUrlFeedback] = useState<IUrlResponse | null>(null);
    const [isControlsDisabled, setIsControlsDisabled] = useState<boolean>(true);
    

    // set settings options
    const getSettingsTabOptions = (): ISettingOption[] => {
        return generateSettingOptsObj();
    };

    // set default settings
    const _loadSettings = (): void => {
        const storaged = localStorage.getItem("my_qrcode_app_settings");
        const settings = storaged ? JSON.parse(storaged) : defaultSettings;
        setStoragedSettings(settings);
    };

    // url
    const updateUrlValue = (value: string): void => {
        dispatch({ type: "SET_URL_VALUE", urlValue: value });
    };

    const getUrlFeedback = (url: string): void => {
        setUrlFeedback(checkUrl(url));
    };

    // global settings
    const updateQRGlobalSettings = (ev: ChangeEvent<HTMLInputElement>): void => {
        const newObj = { ...state.global, [ev.target.name]: ev.target.value };
        dispatch({ type: "SET_GLOBAL_SETTINGS", global: newObj });
    };

    // qrVision settings
    const updateQRVisionSettings = (ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, type: EQRVisionType): void => {
        const { name, value } = ev.target;
        const targetObj = type === EQRVisionType.DOT ? state.vision.dot : state.vision.eye;
        const newObj = { ...targetObj, [name]: value };
        
        dispatch({
            type: "SET_QR_VISION_SETTINGS",
            vision: {
                ...state.vision,
                [type === EQRVisionType.DOT ? "dot" : "eye"]: {
                    ...newObj,
                },
            },
        });
    };

    // logo settings
    const updateQRLogoSettings = async (ev: ChangeEvent<HTMLInputElement>): Promise<void> => {
        if (ev.target.type === 'file') {
            const file = ev.target.files?.[0];
            if (!file) return;
            const logoImage = await _blobToDataURL(file as Blob);
            dispatch({ type: "SET_LOGO_SETTINGS", logo: { ...state.logo, logoImage } });
            return;
        }
      
        const { name, value } = ev.target;
        const newObj = { ...state.logo, [name]: value };
        dispatch({ type: "SET_LOGO_SETTINGS", logo: newObj });
    };

    const _blobToDataURL  = (blob: Blob) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            }
            reader.readAsDataURL(blob);
        })
    };
      

    // settings controls
    const saveOrResetSettings = (controlType: ESettingsControlType): void => {
        if (controlType === ESettingsControlType.SAVE) {
            setStoragedSettings(state);
            return;
        }
        _loadSettings();
    };

    useEffect(() => {
        _loadSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!storagedSettings) return;
        dispatch({ type: "SET_ALL_SETTINGS", ...storagedSettings });
    }, [storagedSettings]);

    useEffect(() => {
        getUrlFeedback(state.urlValue || "");
    }, [state.urlValue]);

    useEffect(() => {
        setIsControlsDisabled(JSON.stringify(storagedSettings) === JSON.stringify(state));
    }, [state, isControlsDisabled, storagedSettings]);

    const propsValues = {
        selectedTab,
        urlFeedback,
        urlValue: state.urlValue,
        global: state.global,
        vision: state.vision,
        logo: state.logo,
        isControlsDisabled,
        getSettingsTabOptions,
        setSelectedTab,
        updateUrlValue,
        updateQRGlobalSettings,
        updateQRVisionSettings,
        updateQRLogoSettings,
        saveOrResetSettings,
    };

    return (
        <QRCodeContext.Provider value={propsValues}>
            {children}
        </QRCodeContext.Provider>
    );
};