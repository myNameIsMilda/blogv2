import connectMongoDb from "@/libs/mongodb";
import Tweet from "@/models/Tweet";
import {NextResponse} from "next/server";
import {searchParamsToUrlQuery} from "next/dist/shared/lib/router/utils/querystring";

export async function POST(req, res){
    const { title, content } = await req.json();
    await connectMongoDb();
    await Tweet.create({ title, content });
    return NextResponse.json({ message: "Tweet created" }, { status: 201});
}

export async function GET(req, res){
    await connectMongoDb();
    const tweets = await Tweet.find();
    return NextResponse.json({tweets});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Tweet.findByIdAndDelete(id);
    return NextResponse.json({ message: "Tweet deleted" }, { status: 200});
}

