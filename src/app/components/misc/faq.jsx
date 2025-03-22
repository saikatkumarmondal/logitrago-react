import Banner from "../../sections/common/banner";
import { data } from "../../../globals/data/faq";

export default function FAQPage() {
    return (
        <>
            <Banner _data={data.banner} />

            <div className="section-full p-t120 p-b90 tw-faq-area">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>{data.faq.title}</div>
                        </div>
                        <h2 className="wt-title">{data.faq.subtitle}</h2>
                        <p className="section-head-text">{data.faq.description}</p>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="tw-faq-section">
                            <div className="accordion tw-faq" id="sf-faq-accordion">

                                {
                                    data.faq.faqs.map((_object, index) => (
                                        <div key={index} className="accordion-item">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#FAQ"+index}
                                            aria-expanded="false">
                                                {_object.que}
                                            </button>
                                            <div id={"FAQ"+index} className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                                <div className="accordion-body">
                                                    {_object.ans}
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