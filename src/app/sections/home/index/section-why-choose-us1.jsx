import { NavLink } from "react-router-dom";

export default function SectionWhyChooseUs1({_data}) {
    return (    
        <div className="section-full-wrap site-bg-gray tw-why-choose-area">
            
            <div className="section-full p-t120 p-b120 tw-why-choose-area-top bg-cover bg-no-repeat" style={{backgroundImage: `url(${_data.background})`}}>        
                <div className="container">

                    <div className="tw-why-choose-section">

                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="tw-why-choose-left">
                                    {/* <!-- TITLE START--> */}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                        <div>{_data.title}</div>                                
                                        </div>
                                        <h2 className="wt-title">{_data.subtitle}</h2>
                                    </div>                  
                                    {/* <!-- TITLE END--> */}
                                    <strong>{_data.description.short}</strong>
                                    <p className="section-head-text">{_data.description.long}</p>
                                    <div className="tw-why-choose-left-bottom">
                                        <NavLink to="/about-us" className="btn-half site-button"><span>Learn More</span><em></em></NavLink>
                                        <div className="sign-font">
                                            <span>Signature</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="tw-why-choose-right">
                                    <div className="tw-why-choose-media1 shine-effect">
                                        <div className="shine-box">
                                            <img src={_data.pic1} alt="#" />
                                        </div>
                                    </div>
                                    <div className="tw-why-choose-media2 slide-top shine-effect">
                                        <div className="shine-box">
                                            <img src={_data.pic2} alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tw-hilite-text-wrap2">
                            <div className="tw-hilite-text">
                                <span>Logistics</span>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>

            <div className="tw-any-help-section">
                <div className="container">
                    <div className="tw-any-help-inner">
                        <img src={_data.help.icon} alt="#" />
                        <span className="tw-24">24/7 Active Suport Team</span>
                        <span className="tw-help-title">Need Immediate Support Or Any Help?</span>
                        <span className="tw-help-number">{_data.help.number}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}