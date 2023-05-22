import { ReactNode, FC } from 'react';

import styles from './../styles/main.module.scss';

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props): JSX.Element => {
    return <div className={styles.layout} >{children}</div>
};

export default Layout;