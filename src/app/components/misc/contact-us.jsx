/* eslint-disable jsx-a11y/iframe-has-title */
import Banner from "../../sections/common/banner";
import { data } from "../../../globals/data/contact-us";
import { publicUrlFor } from "../../../globals/constants";

export default function ContactPage() {
    return (
        <>
            <Banner _data={data.banner} />
            
            <div className="section-full  p-t120 p-b120">
                <div className="section-content">
                    <div className="container">
                        <div className="gmap-outline mb-5">
                            <div className="google-map">
                                <div style={{ width: '100%' }}>
                                    <iframe height={460} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-one">
                            {/* TITLE START*/}
                            <div className="section-head left wt-small-separator-outer">
                                <h2 className="wt-title m-b30">Send Us a Message</h2>
                            </div>
                            {/* TITLE END*/}
                            {/* CONTACT FORM*/}
                            <div className="contact-one-inner  site-bg-sky-blue-light">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="contact-form-outer">
                                            <form className="cons-contact-form" method="post" action="form-handler2.php">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <textarea name="message" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn-half site-button"><span>Submit Now</span><em /></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="contact-info  site-bg-dark bg-no-repeat bg-bottom-left" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/background/contact-bg.png')})` }}>
                                            {/* TITLE START*/}
                                            <div className="section-head-small white mb-4">
                                                <h3 className="wt-title">Let's get in touch</h3>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="contact-info-section">
                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-map-marker"><span /></div>
                                                    <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                </div>
                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-mobile-phone custome-size"><span /></div>
                                                    <p><a href="tel:+216-761-8331">+2 900 234 4241</a></p>
                                                    <p><a href="tel:+216-761-8331">+2 900 234 3219</a></p>
                                                </div>
                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-envelope-o"><span /></div>
                                                    <p>infohelp@gmail.com</p>
                                                    <p>support12@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}