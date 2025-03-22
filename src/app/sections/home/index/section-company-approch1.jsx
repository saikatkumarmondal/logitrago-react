import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import CountUp from "react-countup";

export default function SectionCompanyApproch1({_data}) {
    return (
        <div className="section-full p-t120 p-b90 site-bg-white tw-company-approch-area">
                        
                <div className="container">

                    <div className="wt-separator-two-part">
                        <div className="row wt-separator-two-part-row">
                            <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                                {/* <!-- TITLE START--> */}
                                <div className="section-head left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                    <div>{_data.title}</div>                                
                                    </div>
                                    <h2 className="wt-title">{_data.subtitle}</h2>
                                </div>                  
                                {/* <!-- TITLE END--> */}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                                <NavLink to="/about-us" className="btn-half site-button"><span>Read More</span><em></em></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="tw-company-approch-section">
                        <div className="tw-company-approch-inner">
                            <div className="tw-company-years">
                                <div className="light">
                                    <h1>{_data.yearsOfExperience}</h1>
                                   <img src={publicUrlFor("/assets/images/text-bg.jpg")} alt="#" />
                                </div>
                                <div className="tw-company-info">
                                    <span>Year’s of experience in transport and logistics services</span>
                                </div>
                            </div>

                            <div className="row">
                                
                                {
                                    _data.specifications.map((_object, index)=>(
                                        <div key={index} className="col-lg-4 col-md-12">
                                            <div className="counter-outer-two">
                                                <div className="tw-counter-media">
                                                    <img src={_object.icon} alt="#" />
                                                </div>
                                                <div className="icon-content">
                                                    <div className="tw-count-number site-text-primary">
                                                        <span className="counter">
                                                            <CountUp end={_object.count} duration={10} />
                                                        </span>+
                                                    </div>
                                                    <h3 className="icon-content-info">{_object.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                    </div>                 
                </div>

            </div>
    )
}