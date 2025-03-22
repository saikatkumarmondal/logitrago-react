export default function SectionBookService() {
    return (
        <>
            <h2 className="wt-title mt-4 mb-4">Book other services</h2>
            <div className="book-other-services site-bg-sky-blue-light p-5">
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
                                <select id="Freight_Type" className="form-select">
                                    <option selected>Freight Type</option>
                                    <option>...</option>
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
                                <select id="Incoterms" className="form-select">
                                    <option selected>Incoterms</option>
                                    <option>...</option>
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
                                        <span>Send Request</span><em />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}