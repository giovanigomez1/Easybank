import logo_footer from '../images/logo_footer.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'



function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__container--logo_social">
          <div className="footer__container--logo_social-logo">
            <img src={logo_footer} alt="" />
          </div>
          <div className="footer__container--logo_social-media">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="footer__container--options">
          <ul className="footer__container--options_menu1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className="footer__container--options_menu2">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
          
        </div>
        <div className="footer__container--action">
          <button className="btn">
            Request Invite
          </button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
      

    </footer>
  )
}


export default Footer