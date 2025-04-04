import * as admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';

const serviceAccount = require(path.resolve(__dirname, '../../mapazzz-firebase.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const connectiondb = admin.firestore(); 

export  default connectiondb;