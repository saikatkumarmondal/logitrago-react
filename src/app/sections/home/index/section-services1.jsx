import { NavLink } from "react-router-dom";

export default function SectionServices1({_data}) {
    return (
        <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style1-area tyre-mark-bg">
               
                <div className="services-gallery-block-outer2">
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

                        <div className="section-content"> 
                            <div className="services-gallery-style1">
                                <div className="owl-carousel services-gallery-one owl-btn-bottom-center ">
                                
                                    {
                                        _data.services.map((_object, index)=>(
                                            <div key={index} className="item ">
                                                <div className="service-box-style1">
                                                    <div className="service-content">
                                                        <div className="service-content-inner">
                                                            <div className="service-content-top"> 
                                                                <h3 className="service-title-large"><NavLink to="/services/detail">{_object.title}</NavLink></h3>
                                                            </div>
                                                            <div className="service-content-bottom">
                                                                <span className="service-title-large-number">{_object.serial}</span>
                                                                <p>{_object.description}</p>
                                                                <NavLink to="/services/detail" className="site-button-2">View Detail</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-media">
                                                        <img src={_object.image} alt="#" />
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

                <div className="tw-hilite-text-wrap">
                    <div className="tw-hilite-text right">
                        <span>Services</span>
                    </div>
                </div>
                
            </div>
    )
}