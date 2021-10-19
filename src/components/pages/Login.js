import React from "react";
import { Link } from "react-router-dom";
import googleImg from '../../assets/google.png';
import facebookImg from '../../assets/facebook.png';
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation} from 'react-router-dom';
import login from "../../assets/login.png";

export default function Login() {
     
    const { signInWithGoogle, setError} = useAuth();

    const location = useLocation()
    const history = useHistory()

    const redirect_uri = location.state?.from || '/';

    const redirectUser = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)
        }).catch(error => setError(error.message))
    }

  return (
    <div className="container lg:py-10">
      <div className="grid lg:grid-cols-2 gap-4 my-6">
        <div>
          <h1>Please Login</h1>
          <p>Without you can't visit every page</p>
          <img className="w-50" src={login} alt="" />
        </div>
        <form>
          <input
            type="email"
            placeholder="Email"
            required
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <input
            type="password"
            req="true"
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <button
            className="submit-btn btn btn-danger btn-lg text-md mt-4"
            type="submit"
          >
            Login
          </button>
          <p className="mt-4">New Account?
              <Link to="/register"> Register</Link>
          </p>
          <div className="flex">
              <img onClick={redirectUser} className="w-10 cursor-pointer" src={googleImg} alt="" />
              <img className="w-10 cursor-pointer" src={facebookImg} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
