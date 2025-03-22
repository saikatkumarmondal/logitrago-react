import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";
import { useState } from "react";

function Header() {

    const [isActive, setIsActive] = useState(false);

    function toggleNavClass () {
        setIsActive(!isActive)
    }

    return (
        <header className={"site-header header-style-3 mobile-sider-drawer-menu " + (isActive ? "active" : "")}>

            <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                <div className="main-bar">

                    <div className="container-fluid clearfix">

                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <NavLink to="/">
                                    <img src={publicUrlFor("/assets/images/logo-dark.png")} alt="#" />
                                </NavLink>
                            </div>
                        </div>

                        {/* NAV Toggle Button */}
                        <button id="mobile-side-drawer"
                            data-target=".header-nav"
                            data-toggle="collapse"
                            className="navbar-toggler collapsed"
                            onClick={toggleNavClass}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button>

                        {/* MAIN Vav */}
                        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                            <ul className=" nav navbar-nav">
                                <li className="has-child"><NavLink href="#">Home</NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/index">Home-1</NavLink></li>
                                        <li><NavLink to="/index2">Home-2</NavLink></li>
                                        <li><NavLink to="/index3">Home-3</NavLink></li>
                                        <li><NavLink to="/index4">Home-4</NavLink></li>
                                    </ul>
                                </li>
                                <li className="has-child"><NavLink href="#">Pages</NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/about-us">About Us</NavLink></li>
                                        <li><NavLink to="/faq">Faq</NavLink></li>
                                        <li><NavLink to="/error404">Error 404</NavLink></li>
                                    </ul>
                                </li>
                                <li className="has-child"><NavLink href="#">Services</NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/services/services1">Services 1</NavLink></li>
                                        <li><NavLink to="/services/services2">Services 2</NavLink></li>
                                        <li><NavLink to="/services/detail">Services Detail</NavLink></li>
                                    </ul>
                                </li>

                                <li className="has-child"><NavLink href="#">Blog</NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/blogs/grid">Blog Grid</NavLink></li>
                                        <li><NavLink to="/blogs/detail">Blog Detail</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/contact-us">Contact</NavLink></li>

                            </ul>

                        </div>

                        {/* Header Right Section */}
                        <div className="extra-nav header-2-nav">
                            <div className="extra-cell">
                                <div className="header-search">
                                    <a href="#search" className="header-search-icon"><i className="fa fa-search"></i> </a>
                                </div>
                            </div>
                            <div className="extra-cell">
                                <div className="header-nav-call-section">


                                    <div className="detail">
                                        <span className="title">Free Call In U.S.A</span>
                                        <span><a href="tel:29002344241">2 900 234 4241</a></span>
                                    </div>
                                    <div className="media">
                                        <img src={publicUrlFor("/assets/images/call.png")} alt="#" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                {/* SITE Search */}
                <div id="search">
                    <span className="close"></span>
                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                        <input className="form-control" name="q" type="search" placeholder="Type to search" />
                        <span className="input-group-append">
                            <button type="button" className="search-btn">
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </span>
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Header;