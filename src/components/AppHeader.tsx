import { FC } from 'react';

import ToggleThemeButton from './ToggleThemeButton';
import TogglePanelButton from './TogglePanelButton';

import styles from './../styles/main.module.scss';

const AppHeader: FC = (): JSX.Element => {

    return (
       <div className={styles.appHeader}>
            <ToggleThemeButton />
            <TogglePanelButton />
       </div>
    );
};

export default AppHeader;