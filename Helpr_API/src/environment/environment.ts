import * as dotenv from 'dotenv';

dotenv.config();

export const environment: any = {
  cors: {
    origin: process.env.CORS_ORIGIN,
  },
  dev: process.env.NODE_ENV !== 'production',
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
  helpr: {
    botOAuthToken: process.env.HELPR_BOT_OAUTH_TOKEN,
    botSecret: process.env.HELPR_BOT_SECRET,
    clientId: process.env.HELPR_CLIENT_ID,
  },
  security: {
    jwtSecret: process.env.JWT_SECRET,
  },
  serverPort: process.env.SERVER_PORT,
};
