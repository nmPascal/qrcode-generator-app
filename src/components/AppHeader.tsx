import { FC } from 'react';

import styles from './../styles/main.module.scss';
import ToggleThemeButton from './ToggleThemeButton';
import TogglePanelButton from './TogglePanelButton';

const AppHeader: FC = (): JSX.Element => {

    return (
       <div className={styles.appHeader}>
            <ToggleThemeButton />
            <TogglePanelButton />
       </div>
    );
};

export default AppHeader;