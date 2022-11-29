import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../app/Firebase";

export interface ICreateUserParams {
  email: string;
  password: string;
  username: string;
}

export async function createUser({ email, password, username }: ICreateUserParams) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "accounts", user.uid), {
    username,
    email,
  });
}

