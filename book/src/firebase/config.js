const firebaseConfig = {
  apiKey: process.env.Docusaurus_FIREBASE_API_KEY,
  authDomain: process.env.Docusaurus_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.Docusaurus_FIREBASE_PROJECT_ID,
  storageBucket: process.env.Docusaurus_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.Docusaurus_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.Docusaurus_FIREBASE_APP_ID
};

export default firebaseConfig;
