import { publicUrlFor } from "../../../globals/constants"

export default function SectionSideContact() {
    return (
        <>
            <div className="widget tw-contact-bg-section">
                <h4 className="section-head-small mb-4">Any Emergency?</h4>
                <div className="tw-contact-bg-inner" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/background/bg-4.jpg')})` }}>
                    <div className="section-top">
                        <span>Call Our 24/7 Customer Support</span>
                        <h3 className="tw-con-number"><a href="tel:+9(465)3212055"> +9 (465) 321 20 55</a></h3>
                    </div>
                    <div className="section-bot">
                        <ul>
                            <li>
                                <span><img src={publicUrlFor("/assets/images/icons/map-marker.png")} alt="#" /></span>
                                <p>121 King Street Maxvilla , Tx USA </p>
                            </li>
                            <li>
                                <span><img src={publicUrlFor("/assets/images/icons/map-marker.png")} alt="#" /></span>
                                <p>themaxhelp@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}