import {SignUpForm} from "./sign-up.styles.js"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action.js";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
const difaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUp = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(difaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const resetFormFields = () => {
        setFormFields(difaultFormFields);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (confirmPassword === password) {
            try {
               dispatch(signUpStart(
                    email,
                    password,
                    displayName
                ))
                resetFormFields();
            } catch (err) {
                if (err.code === "auth/email-already-in-case") {
                    alert("cannot create user,email already in use");
                } else {
                    console.log(err.message);
                }
            }
        } else {
            alert("the password is defirent of confirm password");
        }
    };
    return (
        <SignUpForm>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    required
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name" />
                <FormInput
                    required
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email" />
                <FormInput
                    required
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password" />
                <FormInput
                    required
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm password" />

                <CustomButton type="submit" >Sign Up</CustomButton>
            </form>
        </SignUpForm>
    );
};
export default SignUp;
