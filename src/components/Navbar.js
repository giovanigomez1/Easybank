import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import close_menu from '../images/icon-close.svg'
import { useState } from 'react'




function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  function displayMenu() {
    setShowMenu(!showMenu)
  }


  return (
    <div className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <ul className={`navbar__menu ${showMenu ? 'menuOn' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <div className="navbar__hamburger" onClick={displayMenu}>
        <img className={`navbar__hamburger--menu ${showMenu ? 'hidden' : ''}`} src={menu} alt="" />
        <img className={`navbar__hamburger--close ${showMenu ? '' : 'hidden'}`} src={close_menu} alt="" />
      </div>

      
      <div className="navbar__btn">
        <button className='btn'>Request Invite</button>
      </div>


      <div className={`overlay ${showMenu ? '' : 'hidden'}`}>

      </div>



    </div>
  )
}

export default Navbar