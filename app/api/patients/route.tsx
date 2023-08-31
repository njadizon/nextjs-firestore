
import getDataList from "@/firebase/firestore/getDataList";
import addData from "@/firebase/firestore/addData";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await getDataList("/patients")
    
    return NextResponse.json({ data });
}

// export async function POST(request: Request) {
//     console.log('request', request)
//     const body = await request.json();
//     const { data, error } = await addData("/patients", Date.now().toString(), body)

//     return NextResponse.json({ data });
// }