import { geminiResponse } from "@/lib/geminiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const testResponse = await geminiResponse(prompt);

    return NextResponse.json(
      {
        model: testResponse,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Unable to chat with AI ${error}`,
      },
      {
        status: 500,
      }
    );
  }
}
