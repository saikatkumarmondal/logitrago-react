import { NavLink } from "react-router-dom";
import { loadScript, publicUrlFor } from "../../../../globals/constants";
import { useEffect } from "react";

export default function SectionSlider1() {

    useEffect(()=>{
        loadScript('/assets/js/slider-home1.js', true);
        loadScript('/assets/js/bg-image-move.js', true);
    })

    return (
        <div className="twm-slider1-wrap">

            {/* Swiper */}
            <div className="swiper twm-slider">
                <div className="swiper-wrapper">
                    {/*Slide One */}
                    <div className="swiper-slide">
                        <div className="h-banner-wrap">
                            <div className="h-banner-left">
                                <div className="h-bnr-top">
                                    <h2>
                                        <span className="title-outline">Welcome to </span>
                                        SIFA Elevator
                                    </h2>
                                    <p> Reliable elevators and escalators for safe, efficient, and long-lasting performance.  </p>
                                    <NavLink to="/services/services1" className="h-bnr-btn">View Services</NavLink>
                                </div>

                            </div>
                            <div className="h-banner-right">
                                <div className="h-bnr-r-inner">
                                    <div className="h-bnr-media">
                                        <img src={publicUrlFor("/assets/images/main-slider/slider1/plane.png")} alt="#" className="slide-top" />
                                    </div>
                                    <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider1/bg1.jpg')})` }}>

                                    </div>
                                </div>
                            </div>
                            <div className="cross-line-box left up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                            <div className="cross-line-box right up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                            <div className="circle-left-top zoon-in-out"></div>
                        </div>
                    </div>

                    {/*Slide Two */}
                    <div className="swiper-slide">
                        <div className="h-banner-wrap">
                            <div className="h-banner-left">
                                <div className="h-bnr-top">
                                    <h2>
                                        <span className="title-outline">Welcome to </span>
                                        SIFA Elevator
                                    </h2>
                                    <p>Reliable elevators and escalators for safe, efficient, and long-lasting performance. </p>
                                    <NavLink to="/services/services1" className="h-bnr-btn">View Services</NavLink>
                                </div>

                            </div>
                            <div className="h-banner-right">
                                <div className="h-bnr-r-inner">
                                    <div className="h-bnr-media">
                                        <img src={publicUrlFor("/assets/images/main-slider/slider1/truck.png")} alt="#" className="slide-top" />
                                    </div>
                                    <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider1/bg2.jpg')})` }}>

                                    </div>
                                </div>
                            </div>
                            <div className="cross-line-box left up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                            <div className="cross-line-box right up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                            <div className="circle-left-top zoon-in-out"></div>
                        </div>
                    </div>

                    {/*Slide Three */}
                    <div className="swiper-slide">
                        <div className="h-banner-wrap">
                            <div className="h-banner-left">
                                <div className="h-bnr-top">
                                    <h2>
                                        <span className="title-outline">Welcome to </span>
                                        SIFA Elevator 
                                    </h2>
                                    <p> Reliable elevators and escalators for safe, efficient, and long-lasting performance.  </p>
                                    <NavLink to="/services/services1" className="h-bnr-btn">View Services</NavLink>
                                </div>

                            </div>
                            <div className="h-banner-right">
                                <div className="h-bnr-r-inner">
                                    <div className="h-bnr-media">
                                        <img src={publicUrlFor("/assets/images/main-slider/slider1/ship.png")} alt="#" className="slide-top" />
                                    </div>
                                    <div className="h-bnr-animation bg-cover bg-center bg-image-moving" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider1/bg3.jpg')})` }}>

                                    </div>
                                </div>
                            </div>
                            <div className="cross-line-box left up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                            <div className="cross-line-box right up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                            <div className="circle-left-top zoon-in-out"></div>
                        </div>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>

        </div>
    )
}