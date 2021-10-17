import { getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase";




/* Firebase Authentication here */
initializedAuthentication();

const useFirebase = () =>{
    //State Control
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //Firebase Auth 
    const auth = getAuth();

    //Google Sign in function
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider()
        
        //Sign In with firebase Popup
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message)
        }).finally(() =>{
            setIsLoading(true)
        })
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
        error,
        isLoading,
        logOut,
        signInWithGoogle
    }
}

/* Export FireBase */
export default useFirebase;