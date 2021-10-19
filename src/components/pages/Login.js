import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleImg from '../../assets/google.png';
import facebookImg from '../../assets/facebook.png';
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation} from 'react-router-dom';
import loginImg from "../../assets/login.png";

export default function Login() {
     
    const { signInWithGoogle, setError, login} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState();

    const location = useLocation()
    const history = useHistory()

    const redirect_uri = location.state?.from || '/';

    const redirectUser = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)
        }).catch(error => setError(error.message))
    }

    const handleLogin = async (e) =>{
      e.preventDefault();
      try{
        setError("")
        setLoading(true)
        await login(email, password)
        history.push(redirect_uri)
      } catch(err){
        setLoading(false);
        setError("Invalid Password or Email !")
      }
    }
   


  return (
    <div className="container lg:py-10">
      <div className="grid lg:grid-cols-2 gap-4 my-6">
        <div>
          <h1 className="text-4xl">Please Login</h1>
          <p>Without you can't visit every page</p>
          <img className="w-50" src={loginImg} alt="" />
        </div>
        <form onSubmit={handleLogin}>
        <input
            type="email"
            placeholder="Email"
            required
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <input
            type="password"
            req="true"
            value={password} 
            placeholder="password"
            className="border p-3 rounded bg-white my-2 w-100"
            onChange={(e)=> setPassword(e.target.value)}
            
          />
          <br />
          <button
          disabled={loading}
            className="submit-btn btn btn-danger btn-lg text-md mt-4"
            type="submit"
          >
            Login
          </button>
          <p className="mt-4">New Account?
              <Link to="/register" className="text-danger fw-bold"> Register</Link>
          </p>

          <div className="flex mt-4">
              <img onClick={redirectUser} className="w-10 cursor-pointer" src={googleImg} alt="" />
              <img className="w-10 cursor-pointer" src={facebookImg} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
