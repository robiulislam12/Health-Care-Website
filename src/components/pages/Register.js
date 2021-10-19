import React from "react";
import { Link } from "react-router-dom";
import googleImg from "../../assets/google.png";
import facebookImg from "../../assets/facebook.png";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import register from "../../assets/register.png";

export default function Register() {
  const { signInWithGoogle, setError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  const redirectUser = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container lg:py-10">
      <div className="grid lg:grid-cols-2 gap-4 my-6">
        <div>
          <h1>Please Register</h1>
          <p>Without you can't visit every page</p>
          <img src={register} alt="" />
        </div>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            required
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <input
            type="text"
            placeholder="Phone"
            req="true"
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <input
            type="password"
            req="true"
            placeholder="password"
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <input
            type="password"
            req="true"
            placeholder="Confirm password"
            className="border p-3 rounded bg-white my-2 w-100"
          />
          <br />
          <button
            className="submit-btn btn btn-danger btn-lg text-md mt-4"
            type="submit"
          >
            Register
          </button>
          <p className="mt-4">
            Already have any account?
            <Link to="/login"> Log in</Link>
          </p>
          <div className="flex">
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
