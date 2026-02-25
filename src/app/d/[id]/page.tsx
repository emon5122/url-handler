import { baseUrl } from "@/lib/utils";
import { notFound, redirect } from "next/navigation";

const FileDownloader = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const res = await fetch(`${baseUrl}/api/url/${id}`);
    const link = (await res.json()) as string;
    if (link) {
        redirect(link);
    } else {
        notFound();
    }
};

export default FileDownloader;
