import { useEffect } from "react";

import { isDarkThemeAtom } from "../helpers/AtomHelper";

import { IStoragedThemeProps } from "../interfaces/IStoragedThemeProps";

import { useAtom } from "jotai";

const useStoragedTheme = (): IStoragedThemeProps => {
    const [isDarkTheme, setIsDarkTheme] = useAtom(isDarkThemeAtom);
    
    const getOrCreateStoragedTheme = (): void => {
        const storagedTheme = localStorage.getItem("my_qrcode_app_darkTheme");
        const theme = storagedTheme ? JSON.parse(storagedTheme) : false;
        setIsDarkTheme(theme);
    };
    
    useEffect(() => {
        getOrCreateStoragedTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isDarkTheme };
};
export default useStoragedTheme;