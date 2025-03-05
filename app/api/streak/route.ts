import { UserModel } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  
  try {
    const currentHour = new Date().getHours();
    const currentDate = new Date().toISOString().split("T")[0];
    if (currentHour >= 20) {
      const user = await UserModel.findById(id);
      if (!user) {
        return NextResponse.json(
          {
            message: "User not found",
          },
          {
            status: 404,
          }
        );
      }
      let updateStreak = user.streak || 0;
      const lastUpdateStreakDate = user.lastUpdatedDate || null;

      if (lastUpdateStreakDate === currentDate) {
        return NextResponse.json({
          message: "Already updated",
        });
      }

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayDate = yesterday.toISOString().split("T")[0];

      if (lastUpdateStreakDate === yesterdayDate) {
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
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Unable to update streak: ${error}` },
      { status: 500 }
    );
  }
}
