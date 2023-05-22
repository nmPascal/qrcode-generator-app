import { FC } from 'react';

import UrlSetting from './UrlSetting';
import GlobalSettings from './GlobalSettings';
import QRVisionSettings from './QRVisionSettings';
import LogoSetting from './LogoSetting';

type Props = {
    option: string;
};

const PanelContent: FC<Props> = ({ option }: Props): JSX.Element => {
    return (
       <>
            {option === "url" && <UrlSetting />}
            {option === "global" && <GlobalSettings />}
            {option === "vision" && <QRVisionSettings />}
            {option === "logo" && <LogoSetting />}
       </>
    );
};

export default PanelContent;