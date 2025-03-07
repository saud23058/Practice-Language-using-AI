"use client";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react"; 
import { useUserIdMutation } from "@/lib/redux_toolkit/features/chatApiSlice";

interface Props {
  userId: string;
}

const Streak = ({ userId }: Props) => {
  const [updateStreak, { isLoading, error }] = useUserIdMutation();
  const [streak, setStreak] = useState<number | null>(null);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const response = await updateStreak(userId).unwrap();
        if (response.streak) {
          setStreak(response.streak);
        }
      } catch (err) {
        console.error("Error updating streak:", err);
      }
    };

    fetchStreak();
  }, [updateStreak, userId]);

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-60">
      <Flame size={40} color="orange" />
      <h2 className="text-lg font-semibold mt-2">Your Streak</h2>
      {isLoading ? (
        <p className="text-blue-500">Updating...</p>
      ) : error ? (
        <p className="text-red-500">Failed to update streak</p>
      ) : (
        <p className="text-2xl font-bold text-orange-500">{streak ?? 0}</p>
      )}
    </div>
  );
};

export default Streak;
