import { v4 as uuidV4 } from 'uuid';
import User from '../domain/User.js';
import admin from 'firebase-admin';
import Credentials from '../domain/Credentials.js';
import serviceAccount from './accountkey.js';

class Repository {
  #userMap;
  #credentialsMap;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    this.#db = admin.firestore();
    this.#userMap = new Map();
    this.#credentialsMap = new Map();
  }

  createUser(credentials) {
    const id = uuidV4();
    const user = new User(id, credentials, new Date());
    this.#credentialsMap.set(credentials.username, id);
    this.#userMap.set(id, user);
    return user;
  }

  getUserByUserName(username) {
    const id = this.#credentialsMap.get(username);
    return id ? this.#userMap.get(id) : null;
  }
}

export default Repository;
