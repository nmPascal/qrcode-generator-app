import { FluentProvider, teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import Layout from "./components/Layout";
import QRCodeCard from "./components/QRCodeCard";
import SettingsPanel from "./components/Panel/SettingsPanel";
import useStoragedTheme from "./hooks/useStoragedTheme";
import AppHeader from "./components/AppHeader";
import { QRCodeContextProvider } from "./providers/QRCodeContextProvider";

function App() {
    const { isDarkTheme } = useStoragedTheme();

    return (
        <FluentProvider theme={isDarkTheme ? teamsDarkTheme : teamsLightTheme}>
            <QRCodeContextProvider>
                <Layout>
                    <AppHeader />
                    <SettingsPanel />
                    <QRCodeCard />
                </Layout>
            </QRCodeContextProvider>
        </FluentProvider>
    );
}

export default App;
