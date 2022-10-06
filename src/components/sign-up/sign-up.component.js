import "./sign-up.styles.scss"
import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
const difaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUp = () => {
    const [formFields, setFormFields] = useState(difaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);
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
                const { user } = await createAuthUserWithEmailAndPassword(
                    email,
                    password
                );
                await creatUserDocumentFromAuth(user, {
                    displayName,
                });
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
        <div className="sign-up-container">
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
        </div>
    );
};
export default SignUp;
