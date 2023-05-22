import { FC } from 'react';

import { isDarkThemeAtom } from '../helpers/AtomHelper';

import { useAtom } from 'jotai';

import styles from './../styles/main.module.scss';

const ToggleThemeButton: FC = (): JSX.Element => {
    const [isDarkTheme, setIsDarkTheme] = useAtom(isDarkThemeAtom);

    return (
        <label className={styles.themeButton}>
            <input
                type="checkbox"
                checked={!isDarkTheme}
                onChange={() => setIsDarkTheme(!isDarkTheme)}
            />
            <span className={styles.themeButton__slider}></span>
        </label>
    );
};

export default ToggleThemeButton;