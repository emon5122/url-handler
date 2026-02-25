import { prisma } from "@/lib/prismaClient";
import { ParamsType } from "@/types/api";
import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest, { params }: ParamsType) => {
    const { id: paramId } = await params;
    const updateClick = async (id: string) => {
        try {
            return await prisma.url.update({
                where: {
                    id: id,
                },
                data: {
                    openedCount: {
                        increment: 1,
                    },
                    lastAccessedAt: {
                        set: new Date(),
                    },
                },
            });
        } catch (error) {
            console.error("updateClick error:", error);
        }
    };
    try {
        const data = await prisma.url.findUnique({
            where: {
                generatedUrl: paramId,
            },
            select: {
                givenUrl: true,
                id: true,
            },
        });
        if (data?.givenUrl) {
            const { givenUrl } = data;
            await updateClick(data?.id);
            return NextResponse.json(givenUrl, { status: 200 });
        } else {
            return NextResponse.json({ msg: "Not Found" }, { status: 404 });
        }
    } catch (error) {
        console.error("GET /api/url/[id] error:", error);
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
};


export const DELETE = async (req: NextRequest, { params }: ParamsType) => {
    const { id: paramId } = await params;
    const session = await getToken({ req });
    if (!session) {
        return NextResponse.json("Unauthorized", { status: 404 });
    }
    try {
        await prisma.url.delete({
            where: {
                id: paramId,
                createdById: session.sub
            },
        });
        return NextResponse.json({ status: "ok" });
    } catch (error) {
        console.error("DELETE /api/url/[id] error:", error);
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
};


