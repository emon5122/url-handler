import prisma from "@/app/lib/prismaClient";

export const urlList = async ({ id }: { id: string }) => {
    try {
        return await prisma.url.findMany({
            where: {
                createdById: id,
            },
        });
    } finally {
        await prisma.$disconnect();
    }
};

export const urlCount = async ({ id }: { id: string }) => {
    try {
        return await prisma.url.count({
            where: {
                createdById: id,
            },
        });
    } finally {
        await prisma.$disconnect();
    }
};
