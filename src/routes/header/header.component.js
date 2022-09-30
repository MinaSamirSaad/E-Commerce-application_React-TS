import './header.styles.scss'
import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/4.1 crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
const Header = () => {
    const { currentUser ,setCurrentUser} = useContext(UserContext)
    console.log(currentUser)
    const signOutHandiler=async()=>{
        await signOutUser();
        setCurrentUser(null)
    }
    return (
        <Fragment>
            <div className='header'>
                <Link to='/' className='logo-container'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>SHOP</Link>
                    <Link className='option' to='/contact'>CONTACT</Link>
                    {currentUser ? (<span onClick={signOutHandiler} className='option' >SIGN OUT</span>) : (<Link className='option' to='/auth'>SIGN IN</Link>)}

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Header
