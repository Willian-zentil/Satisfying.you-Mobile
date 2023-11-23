
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMRDOfHwk_ykETVTiChzbDTBr02-CC2ZM",
    authDomain: "satisfying-28d22.firebaseapp.com",
    projectId: "satisfying-28d22",
    storageBucket: "satisfying-28d22.appspot.com",
    messagingSenderId: "1003879506834",
    appId: "1:1003879506834:web:383e3f028c53a6551bd74b"
};


const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app)

export { auth_mod, app }