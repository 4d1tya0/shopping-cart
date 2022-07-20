import React from 'react'
import {FaShoppingCart} from "react-icons/fa"

const Navbar = ({setShow,size,inputHandler}) => {
  

  return (
    <nav className='navbar sticky-top navbar-dark bg-dark' >
        <div className='container-fluid justify-content-evenly'>
            <a className='navbar-brand' href='#'  onClick={()=>setShow(true)}>Shopping Cart</a>
            <form className="d-flex col-6" role="search">
              <input onChange={inputHandler} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <div className='cart' onClick={()=>setShow(false)}>
                <span className='btn navbar-brand'>
                    <FaShoppingCart/>
                </span>
                <span className='navbar-brand'>{size}</span>
            </div>
        </div>
    </nav>



  )
}

export default Navbar