import { useEffect, useState } from "react"
import { publicUrlFor } from "../../../../globals/constants";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

var sliderThumb = null;
var sliderContent = null;

export default function SectionTestimonials2({ _data }) {

    const sliderThumbSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        vertical: false,
        focusOnSelect: true,
        autoplay: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        vertical: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    }

    const [navThumb, setNavThumb] = useState(null);
    const [navContent, setNavContent] = useState(null);

    useEffect(() => {
        setNavThumb(sliderThumb)
        setNavContent(sliderContent)
    })

    return (
        <>
            <div className="section-full bg-cover p-t120 p-b120 bg-cover tw-testimonial-2-area" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/background/bg-6.jpg')})` }}>
                {/* TITLE START*/}
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>{_data.title}</div>
                    </div>
                    <h2 className="wt-title">{_data.subtitle}</h2>
                </div>
                {/* TITLE END*/}
                <div className="tw-testimonial-2-area-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="slider-testimonial-2-wrap">
                                    {/* MAIN SLIDES */}
                                    <div className="slick-testimonials-2">
                                        <Slider
                                            {...sliderContentSettings}
                                            asNavFor={navThumb}
                                            ref={slider => (sliderContent = slider)}
                                        >
                                            {
                                                _data.quotes.map((_object, index) => (
                                                    <div key={index} className="slick-item">
                                                        <div className="tw-testimonials2-section">
                                                            <div className="tw-testimonials2-text">
                                                                <span className="tw-testimonials2-quote"><img src={publicUrlFor("/assets/images/quote.png")} alt="#" /></span>
                                                                {_object.quote}
                                                            </div>
                                                            <div className="tw-testimonials2-name">{_object.name}</div>
                                                            <div className="tw-testimonials2-postion">{_object.designation}</div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    {/* THUMBNAILS */}
                                    <div className="slick-testimonials-2-thumb">
                                        <Slider
                                            {...sliderThumbSettings}
                                            asNavFor={navContent}
                                            ref={slider => (sliderThumb = slider)}
                                        >
                                            {
                                                _data.quotes.map((_object, index) => (
                                                    <div key={index} className="slick-item">
                                                        <div className="slick-testimonials-2-thumbpic">
                                                            <img src={_object.image} alt="one" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-outer-border" />
                </div>
            </div>

        </>
    )
}