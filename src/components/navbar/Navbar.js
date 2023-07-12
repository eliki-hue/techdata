import React from 'react'
import '../navbar/navbar.css'
import logo from '../../images/logo2.png'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-lighmt bg-likght">
  
    
  <div class=" navbar-collapse" id="navbar">
    <img className="logo" src={logo} width={''}/>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  <li><HashLink smooth to="/#home">
                Home
    </HashLink>
    </li>
    <li><HashLink smooth to="/#mission">
                Mission
    </HashLink>
    </li>
    <li><HashLink smooth to="/#about">
                About Us
    </HashLink>
    </li>
    <li><HashLink smooth to="/#services">
                Services
    </HashLink>
    </li>
    <li><HashLink smooth to="/#par">
                Partners
    </HashLink>
    </li>
    <li>
        <HashLink smooth to="/#contacts">
            Contacts
        </HashLink>
    </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar