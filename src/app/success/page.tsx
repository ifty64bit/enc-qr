import Link from "next/link";

function Success({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const id = searchParams.id;
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h5 className="text-3xl"> Success. ID: {id}</h5>
            <Link
                href={`/qr/${id}`}
                className="text-blue-500 hover:underline hover:text-blue-700 active:text-blue-800 transition duration-150 ease-in-out"
            >
                View The QR
            </Link>
        </div>
    );
}

export default Success;
