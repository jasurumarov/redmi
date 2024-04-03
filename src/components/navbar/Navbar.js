import React from "react";
import "./Navbar.css"
import icon from "../../assets/images/xiaomi-mi-logo-icon.webp"

function Navbar() {
    return (
        <header className="header">
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="navbar-left">
                        <div className="navbar-left__logo">
                            <img src={icon} alt="" />
                        </div>
                        <ul className="navbar-left__list">
                            <li className="navbar__list-item">
                                <p>Phone</p>
                            </li>
                            <div className="sub-part">
                                Xiomi | Redmi
                            </div>
                            <li className="navbar__list-item">
                                <p>Smart Home</p>
                            </li>
                            <div className="sub-part">
                                Xiomi | Redmi
                            </div>
                            <li className="navbar__list-item">
                                <p>Life Style</p>
                            </li>
                            <div className="sub-part">
                                Xiomi | Redmi
                            </div>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul className="navbar-right__list">
                            <li className="navbar__list-item">
                                <p>Discover</p>
                            </li>
                            <li className="navbar__list-item">
                                <p>Support</p>
                            </li>
                        </ul>
                        <ul className="navbar-right__icons-list">
                            <li className="navbar-right__list-item">
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></button>
                            </li>
                            <li className="navbar-right__list-item">
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar