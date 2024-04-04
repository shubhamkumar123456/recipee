import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">Recipe</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-lg-0">
        <li className="nav-item">
          <Link style={{fontSize:"20px",fontWeight:"500"}} className="nav-link active" aria-current="page" to="/"><IoFastFoodOutline size={"35px"} color='brown'/> Recipe Website</Link>
        </li>
      
      
    
      </ul>
   
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
