import Banner from "../../sections/common/banner";
import SectionServiceDetail from "../../sections/services/section-service-detail";
import SectionSidebar from "../../sections/sidebar/section-sidebar";
import { data } from "../../../globals/data/services-detail";

export default function ServicesDetailPage() {
    return (
        <>
            <Banner _data={data.banner} />

            <div className="section-full p-t120 p-b90 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            <SectionServiceDetail />

                        </div>
                        <div className="col-lg-4 col-md-12 rightSidebar side-bar">

                            <SectionSidebar />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}