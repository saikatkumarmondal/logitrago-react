import { NavLink } from "react-router-dom" 
import { publicUrlFor } from "../../../../globals/constants"

export default function SectionBlogs3({ _data }) {
    return (
        <>
            <div className="section-full p-t120 p-b90 site-bg-white bg-cover">
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
                        <div className="row d-flex justify-content-center">
                            
                            {
                                _data.blogs.map((_object, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        {/*Block one*/}
                                        <div className="blog-post blog-no-image">
                                            <div className="wt-post-info">
                                                <div className="post-date"><span>{_object.day}</span> {_object.month}</div>
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title">
                                                        <NavLink to="/blogs/detail">{_object.title}</NavLink>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>{_object.description}</p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to="/blogs/detail" className="site-button-link site-text-white">Read More</NavLink>
                                            </div>
                                            <span className="qt-light"><img src={publicUrlFor("/assets/images/quote-white.png")} alt="#" /></span>
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