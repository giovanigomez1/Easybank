import logo from '../images/logo.svg'


function Navbar() {
  return (
    <div className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navbar__menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      
      <div className="navbar__btn">
        <button className='btn'>Request Invite</button>
      </div>




    </div>
  )
}

export default Navbar