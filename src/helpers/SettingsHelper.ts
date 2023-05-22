const SettingsHelper = {
    defaultQRCodeSettings: {
        urlValue: "https://google.com",
        global: {
            size: 300,
            quietZone: 25,
            bgColor: "#ffffff",
            fgColor: "#000000",
        },
        vision: {
            dot: {
                qrStyle: "squares",
                ecLevel: "L",
            },
            eye: {
                eyeRadius: "0",
                eyeColor: "#000000",
            },
        },
        logo: {
            logoImage: "",
            width: 80,
            height: 80,
            opacity: 0.5,
        },
    },
    qrStyleOptions: ["squares", "dots"],
    ecLevelOptions: ["L", "M", "Q", "H"],
}

export default SettingsHelper;