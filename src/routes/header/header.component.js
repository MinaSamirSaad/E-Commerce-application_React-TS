import './header.styles.scss'
import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/4.1 crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from './../../contexts/cart.context';
const Header = () => {
    const { currentUser } = useContext(UserContext)
    const {cartOpen}= useContext(CartContext)
    return (
        <Fragment>
            <div className='header'>
                <Link to='/' className='logo-container'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>SHOP</Link>
                    {currentUser ? (<Link onClick={signOutUser} to='/' className='option' >SIGN OUT</Link>) : (<Link className='option' to='/auth'>SIGN IN</Link>)}
                    <CartIcon />
                </div>
                {cartOpen&&<CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Header
