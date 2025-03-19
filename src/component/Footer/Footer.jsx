import React from 'react'
import './Footer.css'
import { assets } from './../../assets/frontend_assets/assets';
import App from './../../App';
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footerContent">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab velit sint nihil dolores suscipit soluta debitis sapiente, animi aspernatur exercitationem ullam delectus aliquam ratione molestiae consequatur, est amet quaerat?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            
            <div className='footer-content-right' >
                <h2>Get in touch!</h2>
                <ul>
                    <li>+251930789552</li>
                    <li>contact@selam.com</li>
                </ul>
            </div>
        </div>
    <hr />
    <p className="footer-copyright">
        Copyright 2024 Tomato.com -All right reserved
    </p>
        
    </div>
  )
}

export default Footer