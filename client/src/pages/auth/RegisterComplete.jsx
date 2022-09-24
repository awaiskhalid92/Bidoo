import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForSignIn"));
  }, []);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  const completeRegistrationFrom = () => (
    <form onSubmit={handelSubmit} className="row gy-5">
      <input
        type="email"
        placeholder="email@xyz.com"
        className="form-control "
        value={email}
        disabled
      />
      <br></br>
      <input
        type="password"
        placeholder="password"
        className="form-control "
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        autoFocus
      />

      <button type="submit" className="btn btn-raised btn-primary col-3">
        Register
      </button>
    </form>
  );
  return (
    <>
      <div className="container p-5">
        <div className="row ">
          <div className="col-md-6 offset-md-3">
            <h3>Register</h3>

            {completeRegistrationFrom()}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComplete;
