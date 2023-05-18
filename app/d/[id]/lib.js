import { kv } from "@vercel/kv";
import prisma from "@/app/lib/prismaClient";

export default async function UrlDownloader(id) {
    try {
        let data = await kv.get(id);
        if (!data) {
            const urlData = await prisma.url.findFirst({
                where: {
                    generatedUrl: id,
                },
                select: {
                    givenUrl: true,
                },
            });
            if (urlData?.givenUrl) {
                const { givenUrl } = urlData;
                await kv.set(id, givenUrl);
                data = givenUrl;
            } else {
                data = null;
            }
        }
        return data;
    } catch (error) {
        console.error("Error retrieving data:", error);
        return { error: "An error occurred" };
    } finally {
        await prisma.$disconnect();
    }
}
