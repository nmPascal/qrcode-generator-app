import { FC } from 'react';

import { useQRCodeContextProvider } from '../../providers/QRCodeContextProvider';

import { Avatar, Divider, Field, Slider } from '@fluentui/react-components';
import { CameraAdd48Regular } from '@fluentui/react-icons';

import styles from './../../styles/main.module.scss';

const LogoSetting: FC = (): JSX.Element => {
    const { logo, updateQRLogoSettings } = useQRCodeContextProvider();

    if (!logo) return <></>;
    return (
       <>
            <Divider className={styles.divider}>Logo</Divider>
            <input
                id="logoImage"
                type="file"
                name="logoImage"
                onChange={(ev) => updateQRLogoSettings(ev)}
            />
            <Avatar
                onClick={() => document.getElementById('logoImage')?.click()}
                size={120}
                icon={<CameraAdd48Regular />}
                className={styles.logo}
                image={{
                    src: logo.logoImage,
                    alt: "Logo",
                }}
            />
            <Divider className={styles.divider}>Logo settings</Divider>
            <div className={styles.logo__sizes}>
            <Field label="Width" className={styles.field}>
                <div className={styles.field__content}>
                    <Slider
                        name='width'
                        className={styles.field__slider}
                        value={logo.width}
                        min={10}
                        max={150}
                        onChange={(ev) => updateQRLogoSettings(ev)}
                    />
                </div>
            </Field>
            <Divider vertical style={{ height: "40px" }} />
            <Field label="Height" className={styles.field}>
                <div className={styles.field__content}>
                    <Slider
                        name='height'
                        className={styles.field__slider}
                        value={logo.height}
                        min={10}
                        max={150}
                        onChange={(ev) => updateQRLogoSettings(ev)}
                    />
                </div>
            </Field>
            </div>
            <Field label="Opacity" className={styles.field}>
                <div className={styles.field__content}>
                    <Slider
                        name='opacity'
                        className={styles.field__slider}
                        value={logo.opacity}
                        step={0.1}
                        min={0}
                        max={1}
                        onChange={(ev) => updateQRLogoSettings(ev)}
                    />
                </div>
            </Field>

       </>
    );
};

export default LogoSetting;