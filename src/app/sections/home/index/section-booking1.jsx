export default function SectionBooking1({ _data }) {

    let freight = ["Freight Type", "..."]
    let incoterms = ["Incoterms", "..."]
    let shipments = ["Shipment Type", "Road", "Train", "Air", "Sea"]

    return (
        <div className="section-full p-t120 p-b90 site-bg-gray tw-booking-area tw-booking-area-bg-wrap" style={{ backgroundImage: `url(${_data.background})` }}>

            <div className="tw-booking-area-bg" style={{ backgroundImage: `url(${_data.imageBack})` }}></div>

            <div className="container">
                {/* <!-- TITLE START--> */}
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>{_data.title}</div>
                    </div>
                    <h2 className="wt-title">{_data.subtitle}</h2>
                    <p className="section-head-text">{_data.description}</p>
                </div>
                {/* <!-- TITLE END--> */}
            </div>

            <div className="container">
                <div className="tw-booking-section">
                    <div className="row">

                        <div className="col-xl-3 col-lg-3 col-md-12">
                            <div className="tw-booking-media">
                                <div className="media">
                                    <img src={_data.image} alt="#" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-9 col-md-12">
                            <div className="tw-booking-form">

                                <div className="row booking-tab-container">
                                    <div className="col-lg-2 col-md-2 booking-tab-menu">
                                        <div className="list-group">
                                            <button className="list-group-item active text-center">
                                                <div className="media">
                                                    <img src={_data.form.quote} alt="#" />
                                                </div>
                                                <span>Request A Quote</span>
                                            </button>
                                            <button className="list-group-item text-center">
                                                <div className="media">
                                                    <img src={_data.form.track} alt="#" />
                                                </div>
                                                <span>Track & Trace</span>
                                            </button>

                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 booking-tab">
                                        {/* <!-- flight section --> */}
                                        <div className="booking-tab-content active">
                                            <form>

                                                <div className="row">

                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="mb-3">
                                                            <input name="email" type="text" required className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="mb-3">
                                                            <input name="phone" type="text" required className="form-control" placeholder="Phone" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="mb-3">
                                                            <select id="Freight_Type" className="form-select" defaultValue={freight[0]}>
                                                                {
                                                                    freight.map(_freight =>
                                                                        <option key={_freight} value={_freight}>{_freight}</option>
                                                                    )
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="City Of Departure" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="Delivery City" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="mb-3">
                                                            <select id="Incoterms" className="form-select" defaultValue={incoterms[0]}>
                                                                {
                                                                    incoterms.map(_incoterms =>
                                                                        <option key={_incoterms} value={_incoterms}>{_incoterms}</option>
                                                                    )
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="Weight" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="mb-3">
                                                            <input name="email" type="text" required className="form-control" placeholder="Height" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="mb-3">
                                                            <input name="phone" type="text" required className="form-control" placeholder="Width" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="mb-3">
                                                            <input name="phone" type="text" required className="form-control" placeholder="Length" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="tw-inline-checked mt-2 mb-3">
                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                <label className="form-check-label" htmlFor="exampleCheck1">Fragile</label>
                                                            </div>

                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                                                <label className="form-check-label" htmlFor="exampleCheck2">Express Delivery</label>
                                                            </div>

                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                                                                <label className="form-check-label" htmlFor="exampleCheck3">Insurance</label>
                                                            </div>

                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="exampleCheck4" />
                                                                <label className="form-check-label" htmlFor="exampleCheck4">Packaging</label>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="tw-booking-footer">
                                                            <div className="tw-booking-footer-btn">
                                                                <button type="submit" className="btn-half site-button">
                                                                    <span>Submit Now</span><em></em>
                                                                </button>
                                                            </div>
                                                            <span className="tw-booking-footer-text">Quote</span>
                                                        </div>

                                                    </div>

                                                </div>

                                            </form>
                                        </div>
                                        {/* <!-- train section --> */}
                                        <div className="booking-tab-content">
                                            <form className="track-and-trace-form">

                                                <div className="row">

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="mb-3">
                                                            <select id="Shipment_Type" className="form-select" defaultValue={shipments[0]}>
                                                                {
                                                                    shipments.map(_shipment =>
                                                                        <option key={_shipment} value={_shipment}>{_shipment}</option>
                                                                    )
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="mb-3">
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-12">
                                                        <div className="tw-inline-checked mt-2 mb-3">
                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="Fragile1" />
                                                                <label className="form-check-label" htmlFor="Fragile1">Fragile</label>
                                                            </div>

                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="Express2" />
                                                                <label className="form-check-label" htmlFor="Express2">Express Delivery</label>
                                                            </div>

                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="Insurance3" />
                                                                <label className="form-check-label" htmlFor="Insurance3">Insurance</label>
                                                            </div>

                                                            <div className="mb-4 form-check">
                                                                <input type="checkbox" className="form-check-input" id="packaging4" />
                                                                <label className="form-check-label" htmlFor="packaging4">Packaging</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="tw-booking-footer">
                                                            <div className="tw-booking-footer-btn">
                                                                <button type="submit" className="btn-half site-button">
                                                                    <span>Track & Trace</span><em></em>
                                                                </button>
                                                            </div>
                                                            <span className="tw-booking-footer-text">Trace</span>
                                                        </div>

                                                    </div>

                                                </div>

                                            </form>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}