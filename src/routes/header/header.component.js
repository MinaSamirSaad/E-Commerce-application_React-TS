import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink}from'./header.styles.js'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector.js'
import { ReactComponent as Logo } from '../../assets/4.1 crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { signOutStart } from '../../store/user/user.action.js'
const Header = () => {
    const dispatch =useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const cartOpen= useSelector(selectIsCartOpen) 
    const signOutUser =()=>dispatch(signOutStart())
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
