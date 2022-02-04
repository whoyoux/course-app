import { initializeApp, getApp, FirebaseOptions } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc
} from 'firebase/firestore';
import {
    getAuth,
    setPersistence,
    browserSessionPersistence
} from 'firebase/auth';
import { getAnalytics, initializeAnalytics } from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const isBrowser = typeof window !== 'undefined';

function createFirebaseApp(config: FirebaseOptions) {
    try {
        return getApp();
    } catch {
        const app = initializeApp(config);
        return app;
    }
}

const app = createFirebaseApp(firebaseConfig);
const firestore = getFirestore(app);

const usersCollection = collection(firestore, `users`);
const coursesCollection = collection(firestore, `courses`);

if (isBrowser && !getAnalytics(app)) initializeAnalytics(app);

const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);

//Get all courses by user id

const getUserCourses = async (userUid: string) => {
    const userRef = doc(firestore, 'users', userUid);

    const q = query(coursesCollection, where('author', '==', userRef));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) return querySnapshot;

    return [];
};

export { firestore, auth, usersCollection, getUserCourses };
