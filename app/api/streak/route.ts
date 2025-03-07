import { UserModel } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const lastStreakDate = user.lastStreakDate || null;

    if (lastStreakDate === currentDate) {
      return NextResponse.json(
        { message: "Already updated today" },
        { status: 200 }
      );
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = yesterday.toISOString().split("T")[0];

    let updateStreak = user.streak || 0;
    if (lastStreakDate === yesterdayDate) {
      updateStreak += 1;
    } else {
      updateStreak = 1;
    }

    await UserModel.findByIdAndUpdate(id, {
      streak: updateStreak,
      lastStreakDate: currentDate,
    });

    return NextResponse.json(
      { message: "Streak updated", streak: updateStreak },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating streak:", error);
    return NextResponse.json(
      { message: `Unable to update streak: ${error}` },
      { status: 500 }
    );
  }
}
