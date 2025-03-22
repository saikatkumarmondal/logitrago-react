import Banner from "../../sections/common/banner";
import SectionServices2 from "../../sections/home/index2/section-services2";
import SectionEstimation2 from "../../sections/home/index2/section-estimation2";
import SectionBooking1 from "../../sections/home/index/section-booking1";
import SectionPricing1 from "../../sections/home/index2/section-pricing1";
import { data } from "../../../globals/data/services2";

export default function Services2Page() {
    return (
        <>
            <Banner _data={data.banner} />

            <SectionServices2 _data={data.services} />
            <SectionEstimation2 _data={data.estimation} />
            <SectionBooking1 _data={data.booking} />
            <SectionPricing1 _data={data.plans} />
        </>
    )
}