import connectMongoDb from "@/libs/mongodb";
import Tweet from "@/models/Tweet";
import {NextResponse} from "next/server";

export async function PUT(request, { params }){
    const { id } = params;
    const { title, content } = await request.json();
    await connectMongoDb();
    await Tweet.findOneAndUpdate({ _id: id }, { title, content }, { new: true });
    return NextResponse.json({ message: "Tweet fully updated" }, { status: 200 });
}

export async function GET(request, { params }){
    try {
        const { id } = params;
        await connectMongoDb();
        const tweet = await Tweet.findOne({ _id: id });
        return NextResponse.json({ tweet }, { status: 200 });
    } catch (error) {
        console.error("Error in GET method:", error);
        throw error;
    }
}