import { NavLink } from "react-router-dom"

export default function SectionClients2({ _data }) {
    return (
        <>
            <div className="home-client3-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
                            {
                                _data.map((_object, index) => (
                                    <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <NavLink to="/about-us"><img src={_object} alt="#" /></NavLink></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}