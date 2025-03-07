import { auth } from "./auth";

export async function userSession() {
  const session = await auth();
  const id = session?.user?.id;
  return id;
}