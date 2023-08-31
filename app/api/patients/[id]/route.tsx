import getData from "@/firebase/firestore/getData";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { data, error } = await getData("/patients", params.id)

    var resData = data?.data();

    return NextResponse.json(resData);
}