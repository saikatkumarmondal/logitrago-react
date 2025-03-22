import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import { publicUrlFor, loadScript } from "../../../../globals/constants";

export default function SectionSlider3() {

    useEffect(() => {
        loadScript('/assets/js/slider-home3.js', true);
        loadScript('/assets/js/bg-image-move.js', true);
    })

    return (
        <>
            <div className="twm-slider3-wrap">
                {/* Swiper */}
                <div className="swiper twm-slider3">
                    <div className="swiper-wrapper">
                        {/*Slide One Ship */}
                        <div className="swiper-slide bg-cover bg-image-moving2" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider3/bg-large.jpg')})` }}>
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <span className="title-small">The provide best</span>
                                        <h2>Shipping Products Worldwide</h2>
                                        <NavLink to="/services/services1" className="h3-bnr-btn site-button">Read More</NavLink>
                                    </div>
                                </div>
                                <div className="h-banner-right">
                                    <div className="h-bnr-r-inner">
                                        <div className="h-bnr-media slider-scale">
                                            <img src={publicUrlFor("/assets/images/main-slider/slider3/ship.png")} alt="#" className="slide-top" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ani-clowd1 clowd1-move"><img src={publicUrlFor("/assets/images/main-slider/slider3/clowd-1.png")} alt="#" /></div>
                            <div className="ani-clowd2 clowd2-move"><img src={publicUrlFor("/assets/images/main-slider/slider3/clowd-2.png")} alt="#" /></div>
                            <div className="ani-clowd3 clowd3-move"><img src={publicUrlFor("/assets/images/main-slider/slider3/clowd-3.png")} alt="#" /></div>
                        </div>
                        {/*Slide Two Truck*/}
                        <div className="swiper-slide bg-cover bg-image-moving2" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider3/bg-large2.jpg')})` }}>
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <span className="title-small">The provide best</span>
                                        <h2>Transportation in the world</h2>
                                        <NavLink to="/services/services1" className="h3-bnr-btn site-button">Read More</NavLink>
                                    </div>
                                </div>
                                <div className="h-banner-right">
                                    <div className="h-bnr-r-inner">
                                        <div className="h-bnr-media slider-scale2">
                                            <div className="trck-animation-wrap slide-top-slow">
                                                <img src={publicUrlFor("/assets/images/main-slider/slider3/truck.png")} alt="#" />
                                                <span className="tyre-1">
                                                    <img src={publicUrlFor("/assets/images/main-slider/slider3/wheel.png")} alt="#" className="spin-tyres" />
                                                </span>
                                                <span className="tyre-2">
                                                    <img src={publicUrlFor("/assets/images/main-slider/slider3/wheel.png")} alt="#" className="spin-tyres" />
                                                </span>
                                                <span className="tyre-3">
                                                    <img src={publicUrlFor("/assets/images/main-slider/slider3/wheel.png")} alt="#" className="spin-tyres" />
                                                </span>
                                                <span className="truck-light">
                                                    <img src={publicUrlFor("/assets/images/main-slider/slider3/truck-light.png")} alt="#" className="blink-image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Slide Three Plane*/}
                        <div className="swiper-slide bg-cover bg-image-moving2" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider3/bg-large3.jpg')})` }}>
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <span className="title-small">The provide best</span>
                                        <h2>Focused on aviation and energy</h2>
                                        <NavLink to="/services/services1" className="h3-bnr-btn site-button">Read More</NavLink>
                                    </div>
                                </div>
                                <div className="h-banner-right">
                                    <div className="h-bnr-r-inner">
                                        <div className="h-bnr-media slider-scale">
                                            <img src={publicUrlFor("/assets/images/main-slider/slider3/plane.png")} alt="#" className="slide-top-fast" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ani-clowd1 clowd1-move"><img src={publicUrlFor("/assets/images/main-slider/slider3/clowd-1.png")} alt="#" /></div>
                            <div className="ani-clowd2 clowd2-move"><img src={publicUrlFor("/assets/images/main-slider/slider3/clowd-2.png")} alt="#" /></div>
                            <div className="ani-clowd3 clowd3-move"><img src={publicUrlFor("/assets/images/main-slider/slider3/clowd-3.png")} alt="#" /></div>
                        </div>
                    </div>
                    {/* navigation Numbers */}
                    <div className="swiper-pagination" />
                    {/* navigation Arrow */}
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </div>
            </div>

        </>
    )
}