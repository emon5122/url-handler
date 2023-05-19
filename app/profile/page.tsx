import CSession from "./clientSession";
import SSession from "./serverSession";

export default async function Info() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {/* @ts-expect-error Async Server Component */}
            <SSession />
            <CSession />
        </div>
    );
}
