import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../app/Firebase';

export interface IAuthenticateParams {
	email: string;
	password: string;
}

export async function authenticate(data: IAuthenticateParams) {
	const { email, password } = data;

	const { user } = await signInWithEmailAndPassword(auth, email, password);

	const docSnap = await getDoc(doc(db, 'accounts', user.uid));

	if (!docSnap.exists()) {
		await signOut(auth);
	}
}

export async function logout() {
	await signOut(auth);
}
