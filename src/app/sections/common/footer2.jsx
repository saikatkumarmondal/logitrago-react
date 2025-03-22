import { NavLink } from "react-router-dom"
import { publicUrlFor } from "../../../globals/constants"

export default function Footer2() {
    return (
        <>
            <footer className="footer-light">
                {/* NEWS LETTER SECTION START */}
                <div className="ftr-nw-ltr site-bg-white">
                    <div className="ftr-nw-ltr-inner site-bg-primary">
                        <div className="container">
                            <div className="ftr-nw-img">
                                <img src={publicUrlFor("/assets/images/news-l-bg.png")} alt="#" />
                            </div>
                            <div className="ftr-nw-content">
                                <div className="ftr-nw-title">Subscribe for offers and news</div>
                                <div className="ftr-nw-form">
                                    <form>
                                        <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text" />
                                        <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NEWS LETTER SECTION END */}
                <div className="ftr-bg">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_about">
                                        <div className="logo-footer clearfix">
                                            <NavLink to="/index"><img src={publicUrlFor("/assets/images/logo-light.png")} alt="#" /></NavLink>
                                        </div>
                                        <p>Many desktop publishing packages and web page editors now use are dolra Ipsum as their default .</p>
                                        <ul className="social-icons">
                                            <li><a href="https://www.facebook.com/" className="fa fa-facebook"> </a></li>
                                            <li><a href="https://www.twitter.com/" className="fa fa-twitter"> </a></li>
                                            <li><a href="https://www.instagram.com/" className="fa fa-instagram"> </a></li>
                                            <li><a href="https://www.youtube.com/" className="fa fa-youtube-play"> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Quick Links</h3>
                                        <ul>
                                            <li><NavLink to="/about-us">About</NavLink></li>
                                            <li><NavLink to="/services/services1">Services</NavLink></li>
                                            <li><NavLink to="/blogs/grid">Blog</NavLink></li>
                                            <li><NavLink to="/faq">FAQ</NavLink></li>
                                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Services</h3>
                                        <ul>
                                            <li><NavLink to="/services/detail">Warehouse</NavLink></li>
                                            <li><NavLink to="/services/detail">Air Freight</NavLink></li>
                                            <li><NavLink to="/services/detail">Ocean Freight</NavLink></li>
                                            <li><NavLink to="/services/detail">Road Freight</NavLink></li>
                                            <li><NavLink to="/services/detail">Packaging</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Community</h3>
                                        <ul>
                                            <li><NavLink to="/about-us">Business Consulting</NavLink></li>
                                            <li><NavLink to="/about-us">Testimonials</NavLink></li>
                                            <li><NavLink to="/about-us">Track Your Shipment</NavLink></li>
                                            <li><NavLink to="/about-us">Privacy Policy</NavLink></li>
                                            <li><NavLink to="/about-us">Terms & Condition</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-bottom-info">
                                <div className="footer-copy-right">
                                    <span className="copyrights-text">Copyright © 2023 by thewebmax All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}