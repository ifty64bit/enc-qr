import { decryptData } from "@/utils/enc";

function Result({ params }: { params: { qr_id: string } }) {
    const qr = params.qr_id;

    const decrypted = decryptData(qr);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <p>{decrypted}</p>
        </div>
    );
}

export default Result;
