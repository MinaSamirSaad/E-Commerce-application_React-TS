import {SignInAndSignUp} from './authintication.styles.js'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const Authentcation = () => {
    return (
        <SignInAndSignUp>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUp>
    )
}
export default Authentcation
