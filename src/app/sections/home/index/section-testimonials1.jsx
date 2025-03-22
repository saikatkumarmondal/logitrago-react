import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

var sliderThumb = null
var sliderContent = null

export default function SectionTestimonials1({_data}) {

    const sliderThumbSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        vertical: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            }
        ]
    }
    
    const sliderContentSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        vertical: true,
        responsive: [
            {
                breakpoint: 480,
                settings: { vertical: false, }
            }
        ]
    }

    const [navThumb, setNavThumb] = useState(null);
    const [navContent, setNavContent] = useState(null);

    useEffect(() => {
        setNavThumb(sliderThumb);
        setNavContent(sliderContent);
    })

    return (
        <div className="section-full bg-cover p-t120 p-b90 bg-cover tw-testimonial-1-area" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/background/bg-6.jpg')})` }}>
            <div className="tw-testimonial-inner-wrap">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="tw-client-logo-wrap">
                                {/* <!-- TITLE START--> */}
                                <div className="section-head left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div>{_data.title}</div>
                                    </div>
                                    <h2 className="wt-title">{_data.subtitle}</h2>
                                </div>
                                {/* <!-- TITLE END--> */}
                                <div className="tw-client-logo-inner">
                                    <ul>

                                        {
                                            _data.clients.map((_object, index) => (
                                                <li key={index}>
                                                    <div className="logo-media">
                                                        <NavLink to="/services/services1"><img src={_object} alt="#" /></NavLink>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                    <div className="truck-img">
                                        <img src={publicUrlFor("/assets/images/truck.png")} alt="#" />
                                    </div>
                                </div>
                            </div>
                            <div className="tw-client-logo-bg"></div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="tw-testimonial-border-outer">
                                <div className="slider-vertical-wrap">
                                    {/* <!-- THUMBNAILS --> */}
                                    <div className="slick-testimonials-thumbnails">
                                        <Slider
                                            {...sliderThumbSettings}
                                            asNavFor={navContent}
                                            ref={slider => (sliderThumb = slider)}
                                        >
                                            {
                                                _data.partners.map((_object, index) => (
                                                    <div key={index} className="slick-item">
                                                        <div className="slick-testimonials-thumb">
                                                            <img src={_object.pic} alt="one" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    {/* <!-- MAIN SLIDES --> */}
                                    <div className="slick-testimonials-content">
                                        <Slider
                                            {...sliderContentSettings}
                                            asNavFor={navThumb}
                                            ref={slider => (sliderContent = slider)}
                                        >
                                            {
                                                _data.partners.map((_object, index) => (
                                                    <div key={index} className="slick-item">
                                                        <div className="tw-testimonials1-cell">
                                                            <div className="tw-testimonials1-text">
                                                                <span className="tw-testimonials1-quote"><img src={publicUrlFor("/assets/images/quote.png")} alt="#" /></span>
                                                                {_object.quote}
                                                            </div>
                                                            <div className="tw-testimonials1-name">{_object.name}</div>
                                                            <div className="tw-testimonials1-postion">{_object.designation}</div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                                <div className="tw-testimonial-border"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}