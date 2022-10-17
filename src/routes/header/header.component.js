import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink}from'./header.styles.js'
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
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (<NavLink onClick={signOutUser} to='/' className='option' >SIGN OUT</NavLink>) : (<NavLink to='/auth'>SIGN IN</NavLink>)}
                    <CartIcon />
                </NavLinksContainer>
                {cartOpen&&<CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Header
