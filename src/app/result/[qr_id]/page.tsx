import { db } from "@/db";
import { qrValues } from "@/db/schemas/qr_values";
import { decryptData } from "@/utils/enc";
import { eq, sql } from "drizzle-orm";

async function Result({ params }: { params: { qr_id: string } }) {
    const response = await db
        .update(qrValues)
        .set({ scan_count: sql`${qrValues.scan_count} + 1` })
        .where(eq(qrValues.id, Number(params.qr_id)))
        .returning({
            updated: qrValues.scan_count,
            value: qrValues.value,
        });

    const scan_count = response[0].updated;

    const decrypted = decryptData(response[0].value);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <p>{decrypted}</p>
            <p>This QR was scanned {scan_count} times.</p>
            {scan_count && scan_count > 5 ? (
                <p className="text-red-500">
                    Too many scans! Possibly fake Product.
                </p>
            ) : null}
        </div>
    );
}

export default Result;
