import ObjectsNames from "@/components/ObjectsNames";

import { userSession } from "@/lib/userSession";

import React from "react";

const Quiz = async () => {
  const userId = (await userSession()) || "";

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Real world Objects Names</h1>

      <ObjectsNames userId={userId} />
    </div>
  );
};

export default Quiz;
