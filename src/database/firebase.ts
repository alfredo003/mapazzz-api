import * as admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const serviceAccount = require('../../mapazzz-firebase.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const connectiondb = admin.firestore(); 

export  default connectiondb;