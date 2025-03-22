import { NavLink } from "react-router-dom"
import { publicUrlFor } from "../../../../globals/constants"

export default function SectionWhyChooseUs3({_data}) {
    return (
        <>
            <div className="section-full p-t120 p-b120 tw-why-choose-area3 tw-why-choose-area3-top">
                <div className="container">
                    <div className="tw-why-choose3-section">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="tw-why-choose-right">
                                    <div className="tw-why-choose-media2 slide-top shine-effect">
                                        <div className="shine-box">
                                            <img src={publicUrlFor("/assets/images/w-choose/pic3.jpg")} alt="#" />
                                        </div>
                                    </div>
                                    <div className="tw-why-choose-media1 shine-effect">
                                        <div className="shine-box">
                                            <img src={publicUrlFor("/assets/images/w-choose/pic4.jpg")} alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="tw-why-choose-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>{_data.title}</div>
                                        </div>
                                        <h2 className="wt-title">{_data.subtitle}</h2>
                                    </div>
                                    {/* TITLE END*/}
                                    <strong>{_data.description.short}</strong>
                                    <p className="section-head-text">{_data.description.long}</p>
                                    <div className="tw-why-choose-left-bottom">
                                        <NavLink to="/about-us" className="btn-half site-button"><span>Learn More</span><em /></NavLink>
                                        <div className="sign-font">
                                            <span>Signature</span>
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