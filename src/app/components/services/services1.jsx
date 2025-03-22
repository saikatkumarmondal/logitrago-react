import Banner from "../../sections/common/banner";
import SectionServices4 from "../../sections/services/section-services4";
import SectionEstimation1 from "../../sections/home/index/section-estimation1";
import SectionBooking1 from "../../sections/home/index/section-booking1";
import SectionClients1 from "../../sections/home/index2/section-clients1";
import { data } from "../../../globals/data/services1";

export default function Services1Page() {
    return (
        <>
            <Banner _data={data.banner} />

            <SectionServices4 _data={data.services} />
            <SectionEstimation1 _data={data.estimation} />
            <SectionBooking1 _data={data.booking} />
            <SectionClients1 _data={data.clients} />
        </>
    )
}