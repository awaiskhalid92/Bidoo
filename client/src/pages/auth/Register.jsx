import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [email, setEmail] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    const actionCodeSettings = {
      url: "http://localhost:3000/Register/complete-register",
      handleCodeInApp: true,
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        toast.success(
          `Verification email is sent to ${email}. Click the link to complete the registration`
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(
          `
          Email missing`
        );
      });
  };

  const registerForm = () => (
    <form onSubmit={handelSubmit} className="row gy-5">
      <input
        type="email"
        placeholder="email@xyz.com"
        className="form-control "
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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
            <ToastContainer />
            {registerForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
