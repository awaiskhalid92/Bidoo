import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
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
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          email = window.prompt("Please provide your email for confirmation");
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem("emailForSignIn");
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
          });
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
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
