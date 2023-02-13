import React from "react";
import { signUpAdmin } from "../../api/auth.api";

const SignUpHandaler = () => {
  signUpAdmin({
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    email: "",
    date_of_birth: "",
    profile_picture: "",
    city: "",
    division: "",
    country: "",
    zip_code: "",
    admin_type: "",
  })
    .then((res) => {
      if (res.data) {
        // navigate
      } else {
        // show error
      }
    })
    .catch();
};

const SignUpPage = () => {
  return (
    <div>
      <h1>SignUpPage</h1>
      <button onClick={SignUpHandaler}>Sign up</button>
    </div>
  );
};

export default SignUpPage;
