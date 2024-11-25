import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signInAccount = async (credentials) => {
  const auth = getAuth();
  const response = signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
      return userCredential?.user || {};
    })
    .catch((error) => {
      return error.message || '';
    });
  return response || {};
};
