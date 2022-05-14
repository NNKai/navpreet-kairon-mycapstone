import React, { useState } from 'react';
import {
    FaBars,
    FaRegFileAlt,
    FaRegIdCard,
    FaAngleRight,
    FaRegFile
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import userlogo from '../../assets/images/userlogo.png'
import './Sidebar.css'
import homelogo from '../../assets/images/Home_Icon.svg'
import resorucesIcon from '../../assets/images/Resources_Icon.svg'
import eventsIcon from '../../assets/images/Events_Icon.svg'
import socialIcon from '../../assets/images/Vector.svg'
import contactIcon from '../../assets/images/Contact_icon.svg'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
const btnRef = React.createRef()
const menuItem=[
   
    {
        path:"/products",
        name:"Products",
        icon: resorucesIcon,
        menuIcon :  <FaAngleRight/>
    },
    {
        path:"/checkoutpage",
        name:"Cart",
        icon: homelogo,
        menuIcon :  <FaAngleRight/>
    },
    
]

class Sidebar extends Component {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);

    state ={
        isOpen : false
    }


      toggleNavbar = (e) => {

        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else{
            this.setState({
                isOpen: true
            })
        }
        
      };

      

    render(){    
    return (
        <div className="container">
           <div style={{width: this.state.isOpen ? "170px" : "60px"}} className="sidebar">
               <div className="top_section">
                    <div style={{marginLeft: this.state.isOpen ? "50px" : "0px"}} className="bars"> <FaBars onClick={this.toggleNavbar}/>
                   </div>   
               </div>
               <div className='logo_section'>
              <Link to='/'> <div style={{display: this.state.isOpen ? "flex" : "flex",}} className="logo"><img src={userlogo} alt='logo'></img></div></Link>
               
               </div>
               {menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active" style={{marginLeft: this.state.isOpen ? "24px" : "0px", justifyContent: this.state.isOpen ? "flex-start" : "center" }}>
                          
                           <div  className='text-container'>
                           <div style={{display: this.state.isOpen ? "none" : "block" }} className="icon" ><img src={item.icon}></img></div>
                           <div style={{display: this.state.isOpen ? "block" : "none" }} className="link_text" ><h4>{item.name}</h4></div>
                           </div>
                         
                       </NavLink>
                   ))
               }
           </div>
           
        </div>
    );
            }
};

export default Sidebar;