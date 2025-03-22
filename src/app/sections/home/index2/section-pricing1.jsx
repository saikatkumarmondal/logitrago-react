import { NavLink } from "react-router-dom"

export default function SectionPricing1({ _data }) {
    return (
        <>
            <div className="section-full p-t120 p-b90 site-bg-white tw-pricing-area">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>{_data.title}</div>
                        </div>
                        <h2 className="wt-title">{_data.subtitle}</h2>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="pricing-block-outer">
                            <div className="row justify-content-center">

                                {
                                    _data.plans.map((_object, index) => (
                                        <div key={index} className={"col-lg-4 col-md-6 "+(index%2 === 0 ? 'm-b30' : 'p-table-highlight m-b30')}>
                                            <div className="pricing-table-1">
                                                <div className="p-table-title">
                                                    <h4 className="wt-title">
                                                        {_object.type}
                                                    </h4>
                                                </div>
                                                <div className="p-table-inner">
                                                    <div className="p-table-price">
                                                        <span>{_object.price}</span>
                                                        <p>/Monthly</p>
                                                    </div>
                                                    <div className="p-table-list">
                                                        <ul>
                                                            {
                                                                _object.benifits.map((_object2, index2)=>(
                                                                    <li key={index2}>{_object2}</li>
                                                                ))
                                                            }
                                                            
                                                        </ul>
                                                    </div>
                                                    <div className="p-table-btn">
                                                        <NavLink to="/about-us" className="btn-half site-button"><span>Buy Now</span><em /></NavLink>
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
            </div>

        </>
    )
}