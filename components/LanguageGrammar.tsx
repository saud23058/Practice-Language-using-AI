"use client";
import { useGrammarMutation } from "@/lib/redux_toolkit/features/chatApiSlice";
import React, { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

interface Props {
  userId: string;
}

const LanguageGrammar = ({ userId }: Props) => {
  const [grammar, { isLoading, error }] = useGrammarMutation();
  const [result, setResult] = useState<string>("");
  const [language, setLanguage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (language) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (submitted && userId) {
      grammar({ language, id: userId })
        .unwrap()
        .then((res) => {
          setResult(res.model ?? "No data received");
        })
        .catch((err) => console.error("Error:", err));
    }
  }, [submitted, userId, language, grammar]);

  return (
    < section className="w-full px-20">
      
    <div className="max-w-full mx-auto p-6 my-10 bg-white shadow-lg rounded-lg">
      
      {!submitted ? (
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Select a Language
          </h2>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Choose a language</option>
            <option value="Arabic">Arabic</option>
            <option value="Bengali">Bengali</option>
            <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Hindi">Hindi</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Malay">Malay</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
            <option value="Swahili">Swahili</option>
            <option value="Tamil">Tamil</option>
            <option value="Turkish">Turkish</option>
            <option value="Urdu">Urdu</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Zulu">Zulu</option>
          </select>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={handleSubmit}
            disabled={!language}
          >
            Fetch Grammar
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Main point in {language}
          </h2>

          {isLoading && <p className="text-blue-500">Loading...</p>}
          {error && <p className="text-red-500">Error fetching data</p>}

          {result && (
            <div
              className="prose max-w-none text-gray-600 mt-4"
              dangerouslySetInnerHTML={{ __html: md.render(result) }}
            />
          )}
        </div>
      )}
      </div>
     </section>
  );
};

export default LanguageGrammar;
