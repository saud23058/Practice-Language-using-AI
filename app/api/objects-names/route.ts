import { DBconnection } from "@/lib/db";
import { geminiResponse } from "@/lib/geminiResponse";
import { UserModel } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log(id);
    
    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }
    await DBconnection();
    const user = await UserModel.findById(id.toString());
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    const language = user.language;
    const prompt = `Now give me in ${language} real world objects names with English meaning `;
    const res =await geminiResponse(prompt);
   
    return NextResponse.json(
      {
        modal: res,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Unable to load the questions ${error}`,
      },
      {
        status: 500,
      }
    );
  }
}
