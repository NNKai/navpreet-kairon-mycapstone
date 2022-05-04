import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../Pages/LogInPage/firebase';

const Header = () => {
    const [{basket, user},dispatch] = useStateValue();

    const handleAuthentication = ()=>{
        if (auth) {
            auth.signOut();
        }
    }
  return (
      <>
    <div className='mobile_header'>
        <div className='top_HeaderContainer'>
        <div className='header_logoContainer'>
            <Link to={'/'}><img className='header_logo' src={Logo} alt='My Logo'/></Link>
            <Link to='/checkoutpage'><div className='header_optionBasket'>
            <ShoppingCartIcon className='header_logo'/>
            <span className='header_optionLineTwo header_baskerCount'>{basket?.length}</span>
            </div></Link>
        </div>
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>
    </div>
        <div className='header_nav'>
        <div className='header_links'>

            <Link to='/products'><div className='header_linkBar'>
                <span className='header_linkBarOptions'>Products</span>
            </div></Link>
            <Link to='/login'><div  onclick={handleAuthentication} className='header_option'>
                <span className='header_optionLineTwo'>{user ? 'Sign Out ' : 'sign in'}</span>
            </div></Link>
        </div>  
        </div>
    </div>
    <div className='tablet_header'>
        <div className='tablettop_HeaderContainer'>
        <div className='tabletheader_logoContainer'>
            <Link to={'/'}><img className='tabletheader_logo' src={Logo} alt='My Logo'/></Link>
        </div>
        <div className='tabletheader_search'>
            <input className='tabletheader_searchInput' type='text'/>
            <SearchIcon className='tabletheader_searchIcon'/>
            
        </div>

        <Link to='/checkoutpage'><div className='tabletheader_optionBasket'>
            <ShoppingCartIcon className='tabletheader_logo'/>
            <span className='tabletheader_optionLineTwo tabletheader_baskerCount'>{basket?.length}</span>
            </div></Link>
    </div>
        <div className='tabletheader_nav'>
            <div className='tabletheader_navcontainer'>
        <div className='tabletheader_links'>
            <Link to='/products'><div className='tabletheader_linkBar'>
                <span className='tabletheader_linkBarOptions'>Products</span>
            </div></Link>
            </div>
            </div> 
            <Link to='/login'><div  onclick={handleAuthentication} className='tabletheader_option'>
                <span className='tabletheader_optionLineTwo'>{user ? 'Sign Out ' : 'sign in'}</span>
            </div></Link>
            
         
        </div>
    </div>
    </>
  )
  
}

export default Header