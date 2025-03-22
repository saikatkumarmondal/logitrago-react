import { NavLink } from "react-router-dom"

export default function SectionSidePosts({ _data }) {
    return (
        <>
            <div className="widget recent-posts-entry">
                <h4 className="section-head-small mb-4">Popular Post</h4>
                <div className="section-content">
                    <div className="widget-post-bx">

                        {
                            _data.map((_object, index) => (
                                <div key={index} className="widget-post clearfix">
                                    <div className="wt-post-media">
                                        <img src={_object.image} alt="#" />
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-header">
                                            <span className="post-date">{_object.date}</span>
                                            <span className="post-title">
                                                <NavLink to="/services/services1">{_object.title}</NavLink>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}