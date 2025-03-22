import { NavLink } from "react-router-dom"

export default function SectionProjects2({ _data }) {
    return (
        <>
            <div className="section-full section-full p-t120 p-b90 tw-project-2-wrap site-bg-gray">
                {/* IMAGE CAROUSEL START */}
                <div className="section-content">
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
                    </div>
                    <div className="tw-project-2-content m-b30">
                        <div className="tw-project-2-content-position">
                            <div className="owl-carousel project-carousel-2">

                                {
                                    _data.projects.map((_object, index) => (
                                        <div key={index} className="item">
                                            <div className="project-new-2">
                                                <div className="wt-img-effect">
                                                    <img src={_object.image} alt="#" />
                                                    <div className="project-view">
                                                        <a className="elem pic-long project-view-btn" href={_object.image} title={_object.caption} data-lcl-txt data-lcl-author data-lcl-thumb={_object.image}>
                                                            <i className="fa fa-search-plus" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="project-new-content">
                                                    <span className="project-new-category">{_object.title}</span>
                                                    <h4 className="wt-title"><NavLink to="/services/detail">{_object.subtitle}</NavLink></h4>
                                                    <NavLink to="/services/detail" className="site-button-h-align">Read More</NavLink>
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

        </>
    )
}