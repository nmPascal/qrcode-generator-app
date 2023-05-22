import { FC } from "react";

import { useQRCodeContextProvider } from "../../providers/QRCodeContextProvider";

import { EQRVisionType } from "../../interfaces/Enums";

import { Divider, Field, Select, Slider } from "@fluentui/react-components";

import styles from "./../../styles/main.module.scss";
import SettingsHelper from "../../helpers/SettingsHelper";

const QRVisionSettings: FC = (): JSX.Element => {
    const { vision, updateQRVisionSettings } = useQRCodeContextProvider();

    if (!vision) return <></>;
    return (
        <>
            <Divider className={styles.divider}>Dots</Divider>
            <Field label="Dot style" className={`${styles.field} ${styles.dropdown}`}>
                <Select
                    name='qrStyle' 
                    value={vision.dot.qrStyle}
                    onChange={(ev) => updateQRVisionSettings(ev, EQRVisionType.DOT)}
                >
                    {SettingsHelper.qrStyleOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </Field>
            <Field label="Error correction level" className={`${styles.field} ${styles.dropdown}`}>
                <Select
                    name='ecLevel'
                    value={vision.dot.ecLevel}
                    onChange={(ev) => updateQRVisionSettings(ev, EQRVisionType.DOT)}
                >
                    {SettingsHelper.ecLevelOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </Field>
            <Divider className={styles.divider}>Eyes</Divider>
            <Field label="Eye radius" className={styles.field}>
                <div className={styles.field__content}>
                    <Slider
                        name="eyeRadius"
                        className={styles.field__slider}
                        value={parseInt(vision.eye.eyeRadius)}
                        onChange={(ev) => updateQRVisionSettings(ev, EQRVisionType.EYE)}
                        min={0}
                        max={30}
                    />
                    <span>{vision.eye.eyeRadius}</span>
                </div>
            </Field>
            <Field label="Eyes Color" className={styles.field}>
                <input
                    name='eyeColor'
                    type="color"
                    value={vision.eye.eyeColor}
                    onChange={(ev) => updateQRVisionSettings(ev, EQRVisionType.EYE)}
                />
            </Field>
        </>
    );
};

export default QRVisionSettings;
