import { useState, useContext } from "react";
import "./sign-in.styles.scss";
import {
  signInWithGooglePopUp,
  creatUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { UserContext } from "../../contexts/user.context";

const difaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    await creatUserDocumentFromAuth(user);
  };
  const [state, setState] = useState(difaultFormFields);
  const { email, password } = state;
  const { setCurrentUser } = useContext(UserContext);
  console.log(state);
  const resetFormFields = () => {
    setState(difaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user)
      console.log("signIn sucses", user);
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
    <div className="sign-in">
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
        <div className="buttons-container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={logGoogleUser}
            buttonType="google"
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
