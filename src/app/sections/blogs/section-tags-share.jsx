import { NavLink } from "react-router-dom"

export default function SectionTagsShare({_data}) {
    return (
        <>
            <div className="post-area-tags-wrap">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="tw-sidebar-tags-wrap">
                            <h4 className="section-head-small mb-4">Releted Tags</h4>
                            <div className="tagcloud">
                                {
                                    _data.map((_object, index)=>(
                                        <NavLink key={index} to="/blogs/grid">{_object}</NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="post-social-icons-wrap">
                            <h4 className="section-head-small mb-4">Post Share</h4>
                            <ul className="post-social-icons">
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook"> </a></li>
                                <li><a href="https://www.twitter.com/" className="fa fa-twitter"> </a></li>
                                <li><a href="https://www.instagram.com/" className="fa fa-instagram"> </a></li>
                                <li><a href="https://www.youtube.com/" className="fa fa-youtube-play"> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}