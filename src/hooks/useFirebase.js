import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile ,signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase";




/* Firebase Authentication here */
initializedAuthentication();

const useFirebase = () =>{
    //State Control
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //Firebase Auth 
    const auth = getAuth();

    //Google Sign in function
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider()
        
        //Sign In with firebase Popup
       return  signInWithPopup(auth, googleProvider)
        
    }

    //Observed User 
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribed
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //sign in with email and password
    const signInWithEmail = async (email, password, username) =>{
        await createUserWithEmailAndPassword(auth, email, password);
  
        // update profile
        await updateProfile(auth.currentUser, {
          displayName: username,
        });
    
        const user = auth.currentUser;
        user({
          ...user,
        });
    }
    
    //login user with email and password
    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
      }

    //Log out User 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            //User Empty
            setUser({})
        }).catch(error => {
            setError(error.message)
        }).finally(() => setIsLoading(false))
    }

    return {
        user,
        setUser, 
        error,
        isLoading,
        login,
        logOut,
        setError,
        signInWithGoogle,
        signInWithEmail,
    }
}

/* Export FireBase */
export default useFirebase;