import { NavLink } from "react-router-dom";

export default function SectionBlogs1({_data}) {
    return (
        <div className="section-full p-t120 p-b90 site-bg-gray bg-cover">
            
                <div className="container">
                   
                    {/* <!-- TITLE START--> */}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                           <div>{_data.title}</div>                                
                        </div>
                        <h2 className="wt-title">{_data.subtitle}</h2>
                        <p className="section-head-text">{_data.description}</p>
                    </div>                  
                    {/* <!-- TITLE END--> */}

                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                            {
                                _data.blogs.map((_blog, index)=> (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <NavLink to="/blogs/detail"><img src={_blog.image} alt="#" /></NavLink>
                                            </div>                                    
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><span>{_blog.day}</span>{_blog.month}</li>
                                                    </ul>
                                                </div>
                                                                            
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><NavLink to="/blogs/detail">{_blog.title}.</NavLink></h3>
                                                </div>
                                                <div className="wt-post-text ">
                                                    <p>
                                                        {_blog.description}
                                                    </p>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <NavLink to="/blogs/detail" className="site-button-link site-text-primary">Read More</NavLink>
                                                </div>                                        
                                            </div>                                
                                        </div>
                                    </div>
                                ))
                            }                          
                        </div>
                    </div>
                   
                </div>
            </div>
    )
}