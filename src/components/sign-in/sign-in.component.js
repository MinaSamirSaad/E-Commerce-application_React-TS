import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  console.log(state);
  const handleSubmit = (event) => {
    setState({
      email: "",
      password: "",
    });
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={state.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit" >sign in</CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
