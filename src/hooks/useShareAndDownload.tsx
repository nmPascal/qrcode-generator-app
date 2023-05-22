
import { IShareAndDownload } from "../interfaces/IShareAndDownload";

const useShareAndDownload = (): IShareAndDownload => {
    const qrCode = document.getElementById("qrCode") as HTMLCanvasElement;

    const onClickShare = async () => {
        try {
            const blob = await new Promise<Blob | null>((resolve) => {
                qrCode.toBlob((blob) => {
                    resolve(blob);
                });
            });

            if (!blob) {
                throw new Error("QR code blob is null.");
            }

            const file = new File([blob], "qrCode.png", { type: "image/png" });
            const shareData = { files: [file] };
            await navigator.share(shareData);
        } catch (error) {
            console.log("Error sharing QR code:", error);
        }
    };
      

    const onClickDownload = () => {
        const link = document.createElement("a");
        link.download = "qrCode.png";
        link.href = qrCode.toDataURL("image/png");
        link.click();
    };

    return { onClickShare, onClickDownload };
};
export default useShareAndDownload;