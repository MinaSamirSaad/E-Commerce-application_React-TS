import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { SignInForm, ButtonContainer } from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/custom-button.component";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const dispatch = useDispatch()
  const signInWithGoogle = async () => {
   return dispatch(googleSignInStart())
  };
  const [state, setState] = useState(defaultFormFields);
  const { email, password } = state;
  const resetFormFields = () => {
    setState(defaultFormFields);
  };
  const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (err) {
      console.log('user sign in failed', err);
    }
  };
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
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
            onClick={signInWithGoogle}
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
