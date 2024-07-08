import db from "@/db";
import { qrValues } from "@/db/schemas/qr_values";
import { encryptData } from "@/utils/enc";
import { redirect } from "next/navigation";

function GenerateQrCode() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <form
                action={async (formData) => {
                    "use server";
                    const payload = formData.get("payload");
                    const encryptedData = encryptData(payload as string);
                    const savedData = await db
                        .insert(qrValues)
                        .values({
                            value: encryptedData,
                        })
                        .returning({
                            inserted: qrValues.id,
                        });
                    redirect(`/success?id=${savedData[0].inserted}`);
                }}
            >
                <input
                    type="text"
                    name="payload"
                    min={1}
                    className="text-black border border-black p-2 rounded w-full "
                />
                <button
                    type="submit"
                    className="text-blue-500 hover:underline hover:text-blue-700 active:text-blue-800 transition duration-150 ease-in-out"
                >
                    Generate
                </button>
            </form>
        </div>
    );
}

export default GenerateQrCode;
