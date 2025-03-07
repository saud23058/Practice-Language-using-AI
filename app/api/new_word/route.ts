import { DBconnection } from "@/lib/db";
import { geminiResponse } from "@/lib/geminiResponse";
import { UserModel } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }
    await DBconnection();
    const user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    const language = user.language;
    const prompt = `Provide one random word in ${language} along with its English meaning. Only provide the word and its meaning, without any additional explanations or examples. Ensure the word is different each time.`;
    const response = await geminiResponse(prompt);
    return NextResponse.json(
      {
        modal: response,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Unable to update streak: ${error}` },
      { status: 500 }
    );
  }
}
