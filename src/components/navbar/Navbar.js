import React from 'react'
import '../navbar/navbar.css'
import logo from '../../images/logo2.png'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-lighmt bg-likght">
  
    
  <div class=" navbar-collapse" id="navbar">
    <img className="logo" src={logo} width={''}/>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mission</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Partners</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Contacts</a>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar