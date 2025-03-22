import { NavLink } from "react-router-dom"
import { publicUrlFor } from "../../../../globals/constants"

export default function SectionWhyChooseUs2({ _data }) {
    return (
        <>
            <div className="section-full p-t120 p-b90 site-bg-white tw-why-choose-area2" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/background/bg-6.jpg')})` }}>
                <div className="tw-why-choose-area-top2">
                    <div className="container">
                        <div className="tw-why-choose-section2">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="tw-why-choose-right">
                                        <div className="tw-why-choose-media1 shine-effect">
                                            <div className="shine-box">
                                                <img src={publicUrlFor("/assets/images/abt-1.jpg")} alt="#" />
                                            </div>
                                        </div>
                                        <div className="tw-why-choose-tag slide-top shine-effect">
                                            <div className="tag-box">
                                                <h2>{_data.branches}</h2>
                                                <h3>Branches</h3>
                                                <span>Since {_data.since}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="tw-why-choose-left">
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div>{_data.title}</div>
                                            </div>
                                            <h2 className="wt-title">{_data.subtitle}</h2>
                                        </div>
                                        {/* TITLE END*/}
                                        <strong>{_data.description}</strong>
                                        <ul className="description-list">
                                            {
                                                _data.specifications.map((_object, index) => (
                                                    <li key={index}>
                                                        <i className="fa fa-angle-right" />
                                                        {_object}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="tw-why-choose-left-bottom">
                                            <NavLink to="/about-us" className="btn-half site-button"><span>Learn More</span><em /></NavLink>
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