import { NavLink } from "react-router-dom";

export default function SectionWhatWeDo1({_data}) {
    return (
        <div className="section-full p-t120 p-b90 site-bg-gray tw-what-wedo-area">
                        
                <div className="container">

                    {/* <!-- TITLE START--> */}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                           <div>{_data.title}</div>                                
                        </div>
                        <h2 className="wt-title">{_data.subtitle}</h2>
                        <p className="section-head-text">{_data.description}</p>
                    </div>                  
                    {/* <!-- TITLE END--> */}

                    <div className="tw-what-wedo-section">

                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="tw-what-wedo-media">
                                    <img src={_data.image} alt="#" />
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="tw-service-icon-box-wrap">
                                    {
                                        _data.works.map((_object, index)=>(
                                            <div key={index} className="service-icon-box-two">
                                    
                                                <div className="service-icon-box-two-media">
                                                    <img src={_object.icon} alt="#" />
                                                </div>
                                                                                        
                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <NavLink to="/services/detail">
                                                            <span className="site-text-primary">{_object.serial}</span>{_object.title}</NavLink>
                                                        </h3>
                                                    <p>{_object.description}</p>
                                                </div>
                                                                                            
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>                  
                </div>

        </div>
    )
}