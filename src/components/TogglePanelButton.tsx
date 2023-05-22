import { FC } from "react";

import { Button, Tooltip } from "@fluentui/react-components";
import { Dismiss48Filled, Edit48Regular } from "@fluentui/react-icons";
import { isPanelOpenAtom } from "../helpers/AtomHelper";

import { useAtom } from "jotai";

import styles from "./../styles/main.module.scss";

const TogglePanelButton: FC = (): JSX.Element => {
    const [isPanelOpen, setIsPanelOpen] = useAtom(isPanelOpenAtom);

    return (
        <div className={styles.openSettings}>
            <Tooltip content="Open settings" relationship="label" >
                <Button
                    appearance="subtle"
                    aria-label="Icon only"
                    icon={isPanelOpen ? <Dismiss48Filled /> : <Edit48Regular />}
                    size="large"
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                />
            </Tooltip>
        </div>
    );
};

export default TogglePanelButton;
