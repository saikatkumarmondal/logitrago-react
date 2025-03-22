import { NavLink } from "react-router-dom"

export default function SectionEstimation2({ _data }) {
    return (
        <>
            <div className="section-full p-t120 p-b90 site-bg-white  tw-estimation-2-area">
                <div className="container">
                    <div className="wt-separator-two-part">
                        <div className="row wt-separator-two-part-row">
                            <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                                {/* TITLE START*/}
                                <div className="section-head left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div>{_data.title}</div>
                                    </div>
                                    <h2 className="wt-title">{_data.subtitle}</h2>
                                    <p className="section-head-text">{_data.description}</p>
                                </div>
                                {/* TITLE END*/}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                                <NavLink to="/about-us" className="btn-half site-button"><span>Read More</span><em /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-estimation-2-section">
                    <div className="container">
                        <div className="row">

                            {
                                _data.solutions.map((_object, index) => (
                                    <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                        <div className={"tw-est-2-section-block " + ( index===2 ? 'active' : '')}>
                                            <div className="tw-est-2-section-block-content">
                                                <span className="tw-est-2-section-number">{_object.serial}</span>
                                                <div className="media">
                                                    <img src={_object.icon} alt="#" />
                                                </div>
                                                <h3 className="tw-title">{_object.title}</h3>
                                                <p>{_object.description}</p>
                                                <NavLink to="/about-us" className="site-button-2-outline dark"><i className="fa fa-angle-right" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}