import { NavLink } from "react-router-dom"
import { publicUrlFor } from "../../../globals/constants"

export default function SectionBlogGrid({ _data }) {
    return (
        <>
            <div className="masonry-wrap row d-flex">
                {
                    _data.map((_object, index) => (
                        <div key={index} className="masonry-item col-lg-6 col-md-12 m-b30">
                            {
                                (
                                    _object.image === "" &&
                                    <BlogItemWithoutImage _object={_object} />
                                ) ||
                                <BlogItemWithImage _object={_object} />
                            }
                        </div>
                    ))
                }
            </div>
            <div className="pagination-outer">
                <div className="pagination-style1">
                    <ul className="clearfix">
                        <li className="prev"><a href="#"><span> <i className="fa fa-angle-double-left" /> </span> </a></li>
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a className="#" href="#"><i className="fa fa-ellipsis-h" /> </a></li>
                        <li><a href="#">5</a></li>
                        <li className="next"><a href="#"><span> <i className="fa fa-angle-double-right" /> </span> </a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function BlogItemWithImage({ _object }) {
    return (
        <>
            <div className="blog-post blog-post-4-outer">
                <div className="wt-post-media wt-img-effect zoom-slow">
                    <NavLink to="/blogs/detail"><img src={_object.image} alt="#" /></NavLink>
                </div>
                <div className="wt-post-info">
                    <div className="wt-post-meta ">
                        <ul>
                            <li className="post-date"><span>{_object.day}</span>{_object.month}</li>
                        </ul>
                    </div>
                    <div className="wt-post-title ">
                        <h3 className="post-title"><NavLink to="/blogs/detail">{_object.title}</NavLink></h3>
                    </div>
                    <div className="wt-post-text ">
                        <p>
                            {_object.description}
                        </p>
                    </div>
                    <div className="wt-post-readmore ">
                        <NavLink to="/blogs/detail" className="site-button-link site-text-primary">Read More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

function BlogItemWithoutImage({ _object }) {
    return (
        <>
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

        </>
    )
}