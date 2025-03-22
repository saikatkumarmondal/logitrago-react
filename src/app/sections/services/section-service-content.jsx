import { publicUrlFor } from "../../../globals/constants"

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media"><img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="#" /></div>
                <h2>Ocean Freight</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/1.jpg")} alt="#" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Go beyond logistics, make the world go round and revolutionize business.</h2>
            <p>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, expound actual teachings of the great explorer of
                the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
                consequences that are extremely painful. Nor again is there anyone.
            </p>
            <p>
                Master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because pleasure, but because those who do not know how to pursue pleasure rationally encounterconsequences that  are extremely painful. Nor again is there anyone.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/2.jpg")} alt="#" />
                </div>
                <div className="service-offered-list">
                    <p>
                        No one rejects, dislikes, or avoids pleasure itself, because pleasure, but because those who do not know how to pursue.
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Cargo Security Management</li>
                            <li>Warehouing</li>
                            <li>Custos Borkerage</li>
                            <li>Unlimited Transfer</li>
                            <li>Inventory Management</li>
                            <li>Short Team Storage</li>
                            <li>Shrink Wrapping</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}