import { NavLink } from "react-router-dom";

export default function SectionEstimation1({_data}) {
    return (
        <div className="section-full p-t120 site-bg-white  tw-estimation-area">
                        
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
                                    <p className="section-head-text">{_data.description}</p>
                                </div>                  
                                {/* <!-- TITLE END--> */}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                                <NavLink to="/about-us" className="btn-half site-button"><span>Read More</span><em></em></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tw-estimation-section bg-cover bg-no-repeat" style={{backgroundImage: `url(${_data.background})`}}>
                    <div className="container">
                        <div className="row">

                            {
                                _data.solutions.map((_object, index)=>(
                                    <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="tw-est-section-block">
                                            <div className="tw-est-section-block-content">
                                                <span className="tw-est-section-number">{_object.serial}</span>
                                                <h3 className="tw-title">{_object.title}</h3>
                                                <p>{_object.subtitle}</p>
                                                <NavLink to="/about-us" className="site-button-2-outline"><i className="fa fa-angle-right"></i></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </div>                  
            </div>
    )
}