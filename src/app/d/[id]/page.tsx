"use server";
import { baseUrl } from "@/lib/utils";
import { notFound, redirect } from "next/navigation";

const FileDownloader = async ({
    params: { id },
}: {
    params: { id: string };
}) => {
    const res = await fetch(`${baseUrl}/api/url/${id}`);
    const link = (await res.json()) as string;
    if (link) {
        redirect(link);
    } else {
        notFound();
    }
};

export default FileDownloader;
