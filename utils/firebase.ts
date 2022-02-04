import { initializeApp, getApp, FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
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

function createFirebaseApp(config: FirebaseOptions) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}

const app = createFirebaseApp(firebaseConfig);
const firestore = getFirestore(app);

if (!getAnalytics(app)) initializeAnalytics(app);

const auth = getAuth(app);

export { firestore, auth };
