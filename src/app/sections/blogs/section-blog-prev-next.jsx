import { NavLink } from "react-router-dom"

export default function SectionBlogPrevNext({_data}) {
    return (
        <>
            <div className="post-navigation m-t30">
                <div className="post-nav-links">
                    <div className="post-nav-item nav-post-prev">
                        <div className="nav-post-arrow">
                            <NavLink to="/about-us">
                                <i className="fa fa-angle-left" />
                            </NavLink>
                        </div>
                        <div className="nav-post-meta">
                            <label>Prev Post</label>
                            <NavLink to="/blogs/grid">{_data.prev.title}</NavLink>
                        </div>
                    </div>
                    <div className="post-nav-item nav-post-next">
                        <div className="nav-post-arrow">
                            <NavLink to="/about-us">
                                <i className="fa fa-angle-right" />
                            </NavLink>
                        </div>
                        <div className="nav-post-meta">
                            <label>Next Post</label>
                            <NavLink to="/blogs/grid">{_data.next.title}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}