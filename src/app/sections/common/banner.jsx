import { NavLink } from "react-router-dom"

export default function Banner({_data}) {
    return (
        <>
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${_data.background})` }}>
                <div className="overlay-main site-bg-sky opacity-08" />
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">{_data.title}</h2>
                            </div>
                        </div>
                        {/* BREADCRUMB ROW */}
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><NavLink to="/index">Home</NavLink></li>
                                <li>{_data.crumb}</li>
                            </ul>
                        </div>
                        {/* BREADCRUMB ROW END */}
                    </div>
                </div>
            </div>

        </>
    )
}