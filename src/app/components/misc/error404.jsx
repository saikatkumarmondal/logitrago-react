import { NavLink } from "react-router-dom";
import { loadScript, publicUrlFor } from "../../../globals/constants";
import { useEffect } from "react";

export default function Error404Page() {

    useEffect(()=>{
        loadScript('/assets/js/bg-image-move.js', true);
    })
    
    return (
        <>
            <div className="error-full-page bg-cover overlay-wraper bg-image-moving2" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider3/bg-large3.jpg')})` }}>
                <div className="overlay-main bg-sky-blue opacity-07" />
                <div className="container">
                    <div className="error-full-page-inner">
                        <div className="error-full-page-inner-info">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="title-style-2">Error 404</h3>
                                    <strong>Uh oh!</strong>
                                    <h4 className="title-style-2">
                                        Something Went Wrong
                                    </h4>
                                    <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                    <NavLink to="/index" className="btn-half site-button"><span>Back To Home</span><em /></NavLink>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="error-media">
                                        <img src={publicUrlFor("/assets/images/main-slider/slider3/plane.png")} className="slide-top" alt="#" />
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