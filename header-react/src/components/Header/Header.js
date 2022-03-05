import React, {useState, Component} from 'react';
import { MenuItems } from './MenuItems';
import './Header.css'
import { Button } from '../Button';



class Header extends Component {

     state = { clicked: false}
     
     handleClick =()=> {
       this.setState({clicked: !this.state.clicked})
     }
   

  render(){
  
  return (
    <nav className='NavbarItems'>
       <img className='navbar__log' src='/pineerbetty.png' alt=''/>
        <div className='menu__icon' onClick={this.handleClick}>
       <img className={this.state.clicked ? 'fas fa-times' : "fas fab-bars" }
        src=' outline_menu_white_24dp.png' alt=''/>
        </div>
        <ul className={this.state.clicked? 'nav-menu active': 'nav__menu'}>
          {MenuItems.map((item, index) =>{
            return(
              <li key={index}
              ><a className={item.cName} href={item.url}>
                {item.title}
              </a>
              </li>

            )
          })}
           
        </ul>
        <Button>Resume</Button>
    </nav>
  ) 
}
}

 export default Header

