import { NavLink } from "react-router-dom"
import { publicUrlFor } from "../../../../globals/constants"

export default function SectionWhatWeDo2({ _data }) {
    return (
        <>
            <div className="section-full p-t120 p-b120 site-bg-gray tw-what-wedo-area3">
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
                    <div className="tw-what-wedo-section3">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="tw-service-icon-box-wrap3 m-b30">
                                    {
                                        _data.works.map((_object, index) => (
                                            <div key={index} className="service-icon-box-three">
                                                <div className="service-icon-box-three-media">
                                                    <img src={_object.icon} alt="#" />
                                                </div>
                                                <div className="service-icon-box-title">
                                                    <h3 className="wt-title">
                                                        <NavLink to="/services/detail">
                                                            <span className="site-text-primary">{_object.serial}.</span>{_object.title}</NavLink>
                                                    </h3>
                                                    <p>{_object.description} </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="tw-what-wedo-media3">
                                    <img src={publicUrlFor("/assets/images/truck-2.png")} alt="#" className="truck-2" />
                                    <img src={publicUrlFor("/assets/images/road.png")} alt="#" className="truck-2-road" />
                                    <div className="truck-2-bg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}