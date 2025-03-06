"use client"
import MCQ from "@/components/MCQ";
import React from "react";
const data = [
  {
   
    question: "What is the capital of Pakistan",
    options: ["Peshawar", "Islamabad", "lahore", "karachi"],
  },
  {
    
    question: "What is the best frame work",
    options: ["Next js", "V .js", "Angular.js", "none"],
  },
  
];




const Quiz = () => {
  return (<div >
    <MCQ data={ data} />
    </div>
    );
};

export default Quiz;
