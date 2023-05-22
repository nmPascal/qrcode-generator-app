import { FC } from 'react';

import { useQRCodeContextProvider } from '../../providers/QRCodeContextProvider';

import { Divider, Field, Slider } from '@fluentui/react-components';

import styles from './../../styles/main.module.scss';

const GlobalSettings: FC = (): JSX.Element => {
    const { global, updateQRGlobalSettings } = useQRCodeContextProvider();

    if (!global) return <></>;
    return (
       <>
            <Divider className={styles.divider}>Sizes</Divider>
            <Field label="QR Code size" className={styles.field}>
                <div className={styles.field__content}>
                    <Slider
                        name='size'
                        className={styles.field__slider}
                        value={global.size}
                        min={200}
                        max={300}
                        onChange={(ev) => updateQRGlobalSettings(ev)}
                    />
                    <span>{global.size}</span>
                </div>
            </Field>
            <Field label="Quiet zone" className={styles.field}>
                <div className={styles.field__content}>
                    <Slider
                        name='quietZone'
                        className={styles.field__slider}
                        value={global.quietZone}
                        min={0}
                        max={20}
                        onChange={(ev) => updateQRGlobalSettings(ev)}
                    />
                    <span>{global.quietZone}</span>
                </div>
            </Field>
            <Divider className={styles.divider}>Colors</Divider>
            <Field label="Background Color" className={styles.field}>
                <input
                    type="color"
                    name='bgColor'
                    value={global.bgColor}
                    onChange={(ev) => updateQRGlobalSettings(ev)}
                />
            </Field>
            <Field label="Foreground color" className={styles.field}>
                <input
                    type="color"
                    name='fgColor'
                    value={global.fgColor}
                    onChange={(ev) => updateQRGlobalSettings(ev)}
                />
            </Field>
       </>
    );
};

export default GlobalSettings;