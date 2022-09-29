import './header.styles.scss'
import { Fragment } from 'react'
import { Link ,Outlet} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'

const Header = () => {
    return (
        <Fragment>
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
            </div>
        </div>
            <Outlet/>
        </Fragment>
    )
}
export default Header
