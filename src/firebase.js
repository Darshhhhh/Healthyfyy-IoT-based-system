import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC39gBuyolQzJTlrBcQPVQBlL2Ec_t39Jw",
  authDomain: "healthyfyy-1218.firebaseapp.com",
  projectId: "healthyfyy-1218",
  storageBucket: "healthyfyy-1218.appspot.com",
  messagingSenderId: "192446289152",
  appId: "1:192446289152:web:ca4218c80cd603454a4fe5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
