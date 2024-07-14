"use client";

function downloadSVGAsPNG() {
    const svgElement = document.getElementById("qr-code") as HTMLElement;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);

    const padding = 10;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const image = new Image();
    const svgData = "data:image/svg+xml;base64," + btoa(svgString);

    image.onload = () => {
        const width = image.width + 2 * padding;
        const height = image.height + 2 * padding;

        canvas.width = width;
        canvas.height = height;

        if (context) {
            context.fillStyle = "white";
            context.fillRect(0, 0, width, height);
            context.drawImage(image, padding, padding);
        }

        const pngData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = pngData;
        link.download = `qr-code.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    image.src = svgData;
}

function DownloadBtn() {
    return (
        <button
            className="text-blue-500 hover:underline hover:text-blue-700 active:text-blue-800 transition duration-150 ease-in-out"
            onClick={() => {
                //Download SVG QR Code as png
                downloadSVGAsPNG();
            }}
        >
            Download
        </button>
    );
}

export default DownloadBtn;
