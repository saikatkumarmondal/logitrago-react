import { NavLink } from "react-router-dom"
import { publicUrlFor, loadScript } from "../../../../globals/constants";
import { useEffect } from "react";

export default function SectionSlider2() {

    useEffect(() => {
        loadScript('/assets/js/slider-home2.js',true);
        loadScript('/assets/js/bg-image-move.js',true);
    })

    return (
        <>
            <div className="twm-slider2-wrap">
                {/* Swiper */}
                <div className="swiper twm-slider2">
                    <div className="swiper-wrapper">
                        {/*Slide One */}
                        <div className="swiper-slide bg-cover" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider1/bg-large.jpg')})` }}>
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <h2>
                                            <span className="title-outline">Around</span>
                                            The World
                                        </h2>
                                        <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                                        <NavLink to="/services/services1" className="h-bnr-btn">View Services</NavLink>
                                    </div>
                                </div>
                                <div className="cross-line-box left up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                                <div className="cross-line-box right up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                                <div className="circle-left-top zoon-in-out" />
                            </div>
                        </div>
                        {/*Slide Two */}
                        <div className="swiper-slide bg-cover" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider1/bg-large2.jpg')})` }}>
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <h2>
                                            <span className="title-outline">To Every</span>
                                            Direction
                                        </h2>
                                        <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                                        <NavLink to="/services/services1" className="h-bnr-btn">View Services</NavLink>
                                    </div>
                                </div>
                                <div className="cross-line-box left up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                                <div className="cross-line-box right up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                                <div className="circle-left-top zoon-in-out" />
                            </div>
                        </div>
                        {/*Slide Three */}
                        <div className="swiper-slide bg-cover" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/main-slider/slider1/bg-large3.jpg')})` }}>
                            <div className="h-banner-wrap">
                                <div className="h-banner-left">
                                    <div className="h-bnr-top">
                                        <h2>
                                            <span className="title-outline">Ready</span>
                                            To Move
                                        </h2>
                                        <p>There are many variations of passages of worem Ipsum available, but the majority</p>
                                        <NavLink to="/services/services1" className="h-bnr-btn">View Services</NavLink>
                                    </div>
                                </div>
                                <div className="cross-line-box left up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                                <div className="cross-line-box right up-down"><img src={publicUrlFor("/assets/images/main-slider/slider1/cross-line-box.png")} alt="#" /></div>
                                <div className="circle-left-top zoon-in-out" />
                            </div>
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