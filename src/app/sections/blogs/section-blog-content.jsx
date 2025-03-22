import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                <div className="wt-post-info">
                    <div className="wt-post-media m-b30">
                        <img src={_data.image} alt="#" />
                    </div>
                    <div className="wt-post-title ">
                        <div className="wt-post-meta-list">
                            <div className="wt-list-content post-date">{_data.date}</div>
                            <div className="wt-list-content post-comment">Comment {_data.commentsCount}</div>
                            <div className="wt-list-content post-view">Views {_data.views}</div>
                        </div>
                        <h3 className="post-title">Go beyond logistics, make the world go round and  revolutionize business.</h3>
                    </div>
                    <div className="wt-post-discription">
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, expound actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounte  consequences that are extremely painful. Nor again is there anyone.
                        </p>
                        <p>
                            Master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because pleasure, but because those who do not know how to pursue pleasure rationally encounterconsequences that are extremely painful. Nor again is there anyone.
                        </p>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="one-column1 mb-3">
                                    <div className="wt-media">
                                        <img src={publicUrlFor("/assets/images/blog/blog-single/thumb/pic1.jpg")} alt="#" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="one-column2 mb-3">
                                    <div className="wt-media">
                                        <img src={publicUrlFor("/assets/images/blog/blog-single/thumb/pic2.jpg")} alt="#" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            No one rejects, dislikes, or avoids pleasure itself, because pleasure, but because those who do not know how to pursue. ho do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                Go beyond logistics, make the world go round and revolutionize business.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Imagination what we can easily see is only a small percentage of what is possible.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Quality never goes out of style. safety, quality, professionalism.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Logistics through innovation, dedication, and technology. ready, set, done.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                We take pride in serving our customers safely. together with passion.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                The quality shows in every move we make where business lives.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. nemo
                                enim ipsam voluptatem quia voluptas.
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}