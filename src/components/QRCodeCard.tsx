import { FC, LegacyRef, useRef } from "react";

import { useQRCodeContextProvider } from "../providers/QRCodeContextProvider";
import useShareAndDownload from "../hooks/useShareAndDownload";

import { QRCode } from "react-qrcode-logo";
import {
    Button,
    Card,
    CardFooter,
    CardPreview,
} from "@fluentui/react-components";
import { ArrowDownload24Filled, Share24Regular } from "@fluentui/react-icons";

import styles from "./../styles/main.module.scss";

const QRCodeCard: FC = (): JSX.Element => {
    const { urlValue, global, vision, logo } = useQRCodeContextProvider();
    const { onClickShare, onClickDownload } = useShareAndDownload();
    
    if (!global || !urlValue || !vision || !logo) return <></>;
    return (
        <Card>
            <CardPreview className={styles.cardPreview}>
                <QRCode
                    id={"qrCode"}
                    value={urlValue}
                    size={global.size}
                    quietZone={global.quietZone}
                    bgColor={global.bgColor}
                    fgColor={global.fgColor}
                    qrStyle={vision.dot.qrStyle as "dots" | "squares"}
                    ecLevel={vision.dot.ecLevel as "L" | "M" | "Q" | "H"}
                    eyeRadius={parseInt(vision.eye.eyeRadius)}
                    eyeColor={vision.eye.eyeColor}
                    logoImage={logo.logoImage}
                    logoWidth={logo.width}
                    logoHeight={logo.height}
                    logoOpacity={logo.opacity}
                />
            </CardPreview>
            <CardFooter>
                <Button 
                    icon={<ArrowDownload24Filled fontSize={16} />}
                    onClick={onClickDownload}
                >
                    Download
                </Button>
                <Button 
                    icon={<Share24Regular fontSize={16} />}
                    onClick={onClickShare}
                >
                    Share
                </Button>
            </CardFooter>
        </Card>
    );
};

export default QRCodeCard;