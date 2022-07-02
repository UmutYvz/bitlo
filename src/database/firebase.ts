// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDS2QqclB0NuHzr_-g_-3ieFOhVBowsY2k',
  authDomain: 'rn-auth-umut.firebaseapp.com',
  projectId: 'rn-auth-umut',
  storageBucket: 'rn-auth-umut.appspot.com',
  messagingSenderId: '162697210959',
  appId: '1:162697210959:web:3eaef1b212f7acddf04e3a',
  measurementId: 'G-NP6Q6N4NNK'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    return error;
  }
};

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch {
    return { error: { statusCode: 403 } };
  }
};
export { auth };

export type ErrorType = {
  statusCoda: number;
};
