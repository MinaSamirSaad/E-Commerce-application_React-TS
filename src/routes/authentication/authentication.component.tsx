import {SignInAndSignUp} from './authintication.styles'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const Authentication = () => {
    return (
        <SignInAndSignUp>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUp>
    )
}
export default Authentication
