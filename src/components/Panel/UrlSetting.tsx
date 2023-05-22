import { FC } from "react";

import { useQRCodeContextProvider } from "../../providers/QRCodeContextProvider";

import { Divider, Field, Input } from "@fluentui/react-components";

import styles from "./../../styles/main.module.scss";

const UrlSetting: FC = (): JSX.Element => {
    const { urlValue, urlFeedback, updateUrlValue } = useQRCodeContextProvider();
    return (
        <>
            <Divider className={styles.divider}>Url</Divider>
                <Field
                label="Enter URL"
                validationState={urlFeedback?.validationState}
                validationMessage={urlFeedback?.validationMessage}
            >
                <Input
                    value={urlValue}
                    onChange={(ev) => updateUrlValue(ev.target.value)}
                    placeholder="https://example.com"
                />
            </Field>
        </>
    );
};

export default UrlSetting;
