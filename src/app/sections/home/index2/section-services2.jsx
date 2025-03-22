import { NavLink } from "react-router-dom";

export default function SectionServices2({ _data }) {
    return (
        <>
            <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style3-area">
                <div className="services-gallery-block-outer3">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>{_data.title}</div>
                            </div>
                            <h2 className="wt-title">{_data.subtitle}</h2>
                            <p className="section-head-text">{_data.description}</p>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="services-gallery-style3">
                                <div className="row">

                                    {
                                        _data.services.map((_object, index) => (
                                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                                <div className="service-box-style3">
                                                    <div className="service-media">
                                                        <img src={_object.icon} alt="#" />
                                                    </div>
                                                    <div className="service-content">
                                                        <h3 className="service-title-large"><span className="service-title-large-number">{_object.serial}</span>
                                                        <NavLink to="/services/detail">{_object.title}</NavLink>
                                                        </h3>
                                                        <p>{_object.description}</p>
                                                        <NavLink to="/services/detail" className="site-button-2">View Detail</NavLink>
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
            </div>

        </>
    )
}