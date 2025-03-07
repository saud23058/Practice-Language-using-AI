"use client"
import MCQ from "@/components/MCQ";
import React from "react";
const data = [
  {
    "question": "What is the Korean alphabet called?",
    "options": ["Kanji", "Hanja", "Hiragana", "Hangul"]
  },
  {
    "question": "Which of the following is a common Korean greeting?",
    "options": ["Konnichiwa", "Annyeonghaseyo", "Ni Hao", "Sawadee"]
  },
  {
    "question": "What does '감사합니다' (gamsahamnida) mean in English?",
    "options": ["Goodbye", "Thank you", "Sorry", "You're welcome"]
  },
  {
    "question": "Which Korean word means 'hello' in an informal way?",
    "options": ["Annyeong", "Sayonara", "Xie Xie", "Anyang"]
  },
  {
    "question": "What is the meaning of '사랑해' (saranghae)?",
    "options": ["Good night", "I love you", "Nice to meet you", "See you later"]
  }
]





const Quiz = () => {
  return (<div className="flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Quiz</h1>
    <MCQ data={ data} />
    </div>
    );
};

export default Quiz;
