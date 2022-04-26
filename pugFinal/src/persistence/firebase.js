import key from '../persistence/accountkey.js';
import admin from 'firebase-admin';

import serviceAccount from 'path/to/serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default serviceAccount;
