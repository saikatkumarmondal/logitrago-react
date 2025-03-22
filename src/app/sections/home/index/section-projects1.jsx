import { NavLink } from "react-router-dom";

export default function SectionProjects1({_data}) {
    return (
        <div className="section-full  tw-project-1-wrap tw-project-1-wrap-bg site-bg-white">
                {/* <!-- IMAGE CAROUSEL START --> */}
                <div className="section-content">
                  
                    <div className="container">
                        <div className="tw-project-1-content">
                            <div className="tw-project-1-content-position">
                                {/* <!-- TITLE START--> */}
                                <div className="section-head left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div>{_data.title}</div>
                                    </div>
                                    <h2>{_data.subtitle}</h2>
                                </div>
                                {/* <!-- TITLE END--> */}
                                <div className="owl-carousel project-carousel  owl-btn-bottom-left">

                                    {
                                        _data.projects.map((_object, index)=>(
                                            <div key={index} className="item">
                                                <div className="project-new-2">
                                                    <div className="wt-img-effect">
                                                        <img src={_object.image} alt="#" />
                                                        <div className="project-view">
                                                            <a className="elem pic-long project-view-btn" href={_object.image} title={_object.caption} 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb={_object.image}>
                                                            <i className="fa fa-search-plus"></i>     
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
                
            </div> 
    )
}