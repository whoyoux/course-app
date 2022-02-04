import * as firebaseAdmin from 'firebase-admin';

console.log(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

// const serviceAccount = JSON.parse(
//     process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
// );

if (firebaseAdmin.apps.length === 0) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
                /\\n/g,
                '\n'
            )
        })
    });
}

export { firebaseAdmin };
