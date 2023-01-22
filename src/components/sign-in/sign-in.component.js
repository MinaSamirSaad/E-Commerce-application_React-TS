import { useState } from "react";
import {SignInForm,ButtonContainer} from "./sign-in.styles.js";
import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton,{BUTTON_TYPE_CLASSES} from "../custom-button/custom-button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const logGoogleUser = async () => {
    await signInWithGooglePopUp();
  };
  const [state, setState] = useState(defaultFormFields);
  const { email, password } = state;
  const resetFormFields = () => {
    setState(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("you are not a user please sign up");
      } else if (err.code === "auth/wrong-password") {
        alert("please write a true password");
      } else {
        console.log(err.message);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <SignInForm>
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In With Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInForm>
  );
};
export default SignIn;
