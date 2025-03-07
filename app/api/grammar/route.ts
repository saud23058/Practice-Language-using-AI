
import { DBconnection } from "@/lib/db";
import { geminiResponse } from "@/lib/geminiResponse";
import { UserModel } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await DBconnection()
    const { searchParams } = new URL(req.url);
    const language = searchParams.get("language");
    const id = searchParams.get("id");

 

    if (!language) {
      return NextResponse.json(
        { message: "Language parameter cannot be null" },
        { status: 400 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    
    
    const user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    await UserModel.findByIdAndUpdate(id, { language });

    const prompt = `Provide a concise and simple grammar technique that makes ${language} language learning easier and more understandable. Focus on key principles that help grasp sentence structure, tenses, and common usage quickly in points with main headings.`;
    const res = await geminiResponse(prompt);

    return NextResponse.json(
      { model: res },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Unable to load the content: ${error}` },
      { status: 500 }
    );
  }
}
