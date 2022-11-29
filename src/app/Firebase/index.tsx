import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

const {
	DEV,
	VITE_API_KEY,
	VITE_APP_ID,
	VITE_AUTH_DOMAIN,
	VITE_MEASUREMENT_ID,
	VITE_MESSAGING_SENDER_ID,
	VITE_PROJECT_ID,
	VITE_STORAGE_BUCKET,
} = import.meta.env;

const firebaseConfig = {
	apiKey: VITE_API_KEY,
	authDomain: VITE_AUTH_DOMAIN,
	projectId: VITE_PROJECT_ID,
	storageBucket: VITE_STORAGE_BUCKET,
	messagingSenderId: VITE_MESSAGING_SENDER_ID,
	appId: VITE_APP_ID,
	measurementId: VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

if (DEV) {
	connectAuthEmulator(auth, 'http://localhost:9099');
	connectFirestoreEmulator(db, 'localhost', 8080);
	connectStorageEmulator(storage, 'localhost', 9199);
}

export { app, db, auth, storage };
