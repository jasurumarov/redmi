import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-top">
                <ul className="footer-top__list ul1">
                    <h3>SUPPORT</h3>
                    <li className="footer-top__list-item">
                        <a href="redmi">Contact us</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">User Guide</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Warranty</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">International Warranty</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">EU Declaration of Conformity</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Scooter Safety Notice</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Android Enterprise Recommended</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Digital Services Act</a>
                    </li>
                </ul>
                <ul className="footer-top__list ul2">
                    <h3>ABOUT US</h3>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">User Guide</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Leadership Team</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Privacy Policy</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Integrity & Compilance</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Investor Relations</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Sustainability</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Trust Center</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi Accessibility</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi HyperOS</a>
                    </li>
                </ul>
                <ul className="footer-top__list ul3">
                    <h3>XIAOMI PROJECTS</h3>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi Creators</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi Studios</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi Imagery</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi Master Class</a>
                    </li>
                    <li className="footer-top__list-item">
                        <a href="redmi">Xiaomi Renovation</a>
                    </li>
                </ul>
                <form className="footer-top__form">
                    <h3 className='footer-top__form__heading'>Follow Xiaomi</h3>
                    <div className="footer-top__form__icons">
                        <a href='https://www.facebook.com/' target='__blank' className="footer-top__form__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                        </a>
                        <a href='https://www.youtube.com/' target='__blank' className="footer-top__form__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                        </a>
                        <a href='https://www.twitter.com/' target='__blank' className="footer-top__form__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        </a>
                        <a href='https://www.instagram.com/' target='__blank' className="footer-top__form__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
                        </a>
                        <a href='https://www.facebook.com/' target='__blank' className="footer-top__form__icon">
                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Xiaomi icon</title><path d="M19.96 20a.32.32 0 0 1-.32-.32V4.32a.32.32 0 0 1 .32-.32h3.71a.32.32 0 0 1 .33.32v15.36a.32.32 0 0 1-.33.32zm-6.22 0s-.3-.09-.3-.32v-9.43A2.18 2.18 0 0 0 11.24 8H4.3c-.4 0-.3.3-.3.3v11.38c0 .27-.3.32-.3.32H.33a.32.32 0 0 1-.33-.32V4.32A.32.32 0 0 1 .33 4h12.86a4.28 4.28 0 0 1 4.25 4.27l.01 11.41a.32.32 0 0 1-.32.32zm-6.9 0a.3.3 0 0 1-.3-.3v-9a.3.3 0 0 1 .3-.3h3.77a.3.3 0 0 1 .29.3v9a.3.3 0 0 1-.3.3z"/></svg>
                        </a>
                    </div>
                    <h3 className="footer-top__form__heading">Let's stay in touch</h3>
                    <label className='footer-top__form-box'>
                        <input required className='footer-top__form-box__input' type="email" placeholder='Enter email adress'/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="20px" fill='white' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </button>
                    </label>
                </form>
            </div>
            <div className="footer-bottom">
                <div className='footer-bottom__line'></div>
                <div className="footer-bottom__content">
                    <div className="footer-bottom__content-left">
                        <p>Copyright © 2010 - 2024 Xiaomi. All Rights Reserved</p>
                        <ul>
                            <a href="redmi">Cookie settings</a>
                            <a href="redmi">|</a>
                            <a href="redmi">Cookie Policy</a>
                            <a href="redmi">|</a>
                            <a href="redmi">Sitemap</a>
                        </ul>
                    </div>
                    <div className="footer-bottom__content-right">
                        <a href="redmi">Global / Global</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer