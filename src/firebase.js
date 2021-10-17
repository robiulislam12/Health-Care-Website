import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7GomWJVM4ka46faYvHvr7nxGkJLfUm_U",
    authDomain: "health-care-d61dd.firebaseapp.com",
    projectId: "health-care-d61dd",
    storageBucket: "health-care-d61dd.appspot.com",
    messagingSenderId: "436312664171",
    appId: "1:436312664171:web:72d602a3222c41fec3a92e"
  };

  const initializedAuthentication = () =>{
    return initializeApp(firebaseConfig);
  }
  export default initializedAuthentication;