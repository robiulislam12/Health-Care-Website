import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleImg from "../../assets/google.png";
import facebookImg from "../../assets/facebook.png";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import register from "../../assets/register.png";

export default function Register() {

  //email , password, name, phone, confirm password state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState()

  const { signInWithGoogle, signInWithEmail,  setError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  //redirect URl
  const redirect_uri = location.state?.from || "/";

  //Redirect user
  const redirectUser = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  //  handleSubmit

  const handleSubmit= async (e) =>{
    e.preventDefault();
    //do validation
    if(password !== confirmPassword){
      return setError("Password don't match!")
    }
    try{
      setError("")
      setLoading(true)
      await signInWithEmail(email, password, userName )
      history.push(redirect_uri)
    } catch(err){
      setLoading(false);
      setError("Failed to Create account!")
    }
  }

  return (
    <div className="container lg:py-10">
      <div className="grid lg:grid-cols-2 gap-4 my-6">
        <div>
          <h1 className="text-4xl">Please Register</h1>
          <p>Without you can't visit every page</p>
          <img src={register} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={userName} 
            onChange={(e)=> setUserName(e.target.value)}
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            required
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <input
            type="number"
            placeholder="Phone"
            req="true"
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
          <input
            type="password"
            req="true"
            placeholder="Confirm password"
            className="border p-3 rounded bg-white my-2 w-100"
            value={confirmPassword} 
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
          <br />
          
          <button
          disabled={loading}
            className="submit-btn btn btn-danger btn-lg text-md mt-4"
            type="submit"
          >
            Register
          </button>

          <p className="mt-4">
            Already have any account?
            <Link to="/login" className="text-danger fw-bold"> Log in</Link>
          </p>


          <div className="flex mt-4">
            <img
              onClick={redirectUser}
              className="w-10 cursor-pointer"
              src={googleImg}
              alt=""
            />
            <img className="w-10 cursor-pointer" src={facebookImg} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}
