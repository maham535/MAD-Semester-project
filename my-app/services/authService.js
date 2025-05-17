// services/authService.js
import axios from 'axios';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { FIREBASE_API_KEY } from './firebase';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

export const signup = async (email, password) => {
  try {
    // 1. Create user with Firebase Authentication
    const authRes = await axios.post(`${BASE_URL}:signUp?key=${FIREBASE_API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });

    const userId = authRes.data.localId;
    
    // 2. Save additional user data to Firestore
    await setDoc(doc(db, 'users', userId), {
      email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    });

    return authRes.data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error?.message || error.message);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}:signInWithPassword?key=${FIREBASE_API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });

    // Update last login time
    const userId = res.data.localId;
    await setDoc(doc(db, 'users', userId), {
      lastLogin: new Date().toISOString()
    }, { merge: true });

    return res.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error?.message || error.message);
  }
};