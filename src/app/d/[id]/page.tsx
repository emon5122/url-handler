"use server";
import { notFound, redirect } from "next/navigation";

const FileDownloader = async ({
    params: { id },
}: {
    params: { id: string };
}) => {
    console.log("res", "-----------------");
    const res = await fetch(`/api/url/${id}`);
    const link = await res.json();
    console.log(link, "-----------------");
    if (link) {
        redirect(link);
    } else {
        notFound();
    }
};

export default FileDownloader;
