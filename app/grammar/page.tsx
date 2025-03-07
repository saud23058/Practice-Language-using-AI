import LanguageGrammar from "@/components/LanguageGrammar";
import { userSession } from "@/lib/userSession";
const Grammar = async () => {
  const userId = (await userSession()) || "";

  return (
    <>
      <LanguageGrammar userId={userId} />
    </>
  );
};

export default Grammar;
