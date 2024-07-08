import db from "@/db";
import { qrValues } from "@/db/schemas/qr_values";
import { eq } from "drizzle-orm";
import { QRCodeSVG } from "qrcode.react";
import { headers } from "next/headers";

async function ShowQrCode({ params }: { params: { id: string } }) {
    const { id } = params;
    const base = `${headers().get("x-forwarded-proto")}://${headers().get(
        "host"
    )}`;
    const value = await db
        .select()
        .from(qrValues)
        .where(eq(qrValues.id, Number(id)))
        .limit(1);

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <QRCodeSVG
                value={`${base}/token/${value[0].value as string}`}
                height={"70%"}
                width={"70%"}
            />
        </main>
    );
}

export default ShowQrCode;
