import { NavLink } from "react-router-dom"

export default function SectionClients1({ _data }) {
    return (
        <>
            <div className="section-full p-t90 p-b90 site-bg-white tw-client-logo2-area">
                <div className="container home-client2-outer">
                    <div className="section-content">
                        <div className="owl-carousel home-client-carousel2 owl-btn-vertical-center">

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