import db from "@/db";
import { qrValues } from "@/db/schemas/qr_values";
import { eq } from "drizzle-orm";
import QRCode from "react-qr-code";

async function ShowQrCode({ params }: { params: { id: string } }) {
    const { id } = params;
    const value = await db
        .select()
        .from(qrValues)
        .where(eq(qrValues.id, Number(id)))
        .limit(1);
    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <QRCode value={value[0].value as string} />
        </main>
    );
}

export default ShowQrCode;
