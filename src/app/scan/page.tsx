"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Scan() {
    const [paused, setPaused] = useState(false);
    const router = useRouter();
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <Scanner
                    constraints={{
                        noiseSuppression: true,
                    }}
                    onScan={(data) => {
                        if (data.length > 0) {
                            setPaused(true);
                            const value = data[0].rawValue;
                            router.push(`/result/${value.split("/token")[1]}`);
                        }
                    }}
                    paused={paused}
                />
            </div>
        </div>
    );
}

export default Scan;
