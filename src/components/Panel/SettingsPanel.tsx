import { FC } from "react";

import { useQRCodeContextProvider } from "../../providers/QRCodeContextProvider";
import { isPanelOpenAtom } from "../../helpers/AtomHelper";

import { ESettingsControlType } from "../../interfaces/Enums";

import { useAtom } from "jotai";
import { TabList, Tab, Button } from "@fluentui/react-components";

import PanelContent from "./PanelContent";

import styles from "./../../styles/main.module.scss";

const SettingsPanel: FC = (): JSX.Element => {
    const [isPanelOpen] = useAtom(isPanelOpenAtom);
    const { selectedTab, isControlsDisabled, getSettingsTabOptions, setSelectedTab, saveOrResetSettings } = useQRCodeContextProvider();
    const settingsTabs = getSettingsTabOptions();

    return (
        <div className={`${styles.settingsPanel} ${isPanelOpen ? styles.open : styles.close}`}>
            <div className={styles.settingsPanel__header}>
                <TabList defaultSelectedValue={selectedTab}>
                    {settingsTabs.map((option, idx) => (
                        <Tab
                            key={idx}
                            value={option.value}
                            onClick={() => setSelectedTab(option.value)}
                        >
                            {option.label}
                        </Tab>
                    ))}
                </TabList>
            </div>
            <div className={styles.settingsPanel__content}>
                <PanelContent option={selectedTab} />
            </div>
            <div className={styles.settingsPanel__footer}>
                <Button
                    disabled={isControlsDisabled}
                    // style={{ opacity: isControlsDisabled ? 0.5 : 1 }}
                    onClick={() => saveOrResetSettings(ESettingsControlType.RESET)}
                >
                    Reset
                </Button>
                <Button
                    disabled={isControlsDisabled}
                    // style={{ opacity: isControlsDisabled ? 0.5 : 1 }}
                    appearance="primary"
                    onClick={() => saveOrResetSettings(ESettingsControlType.SAVE)}
                >
                    Save
                </Button>
            </div>
        </div>
    );
};

export default SettingsPanel;
