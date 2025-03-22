import SectionSlider1 from "../../sections/home/index/section-slider1";
import SectionWhatWeDo1 from "../../sections/home/index/section-what-we-do1";
import SectionWhyChooseUs1 from "../../sections/home/index/section-why-choose-us1";
import SectionBooking1 from "../../sections/home/index/section-booking1";
import SectionEstimation1 from "../../sections/home/index/section-estimation1";
import SectionTestimonials1 from "../../sections/home/index/section-testimonials1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionCompanyApproch1 from "../../sections/home/index/section-company-approch1";
import SectionBlogs1 from "../../sections/home/index/section-blogs1";
import SectionProjects1 from "../../sections/home/index/section-projects1";
import { data } from "../../../globals/data/home1";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Home1Page() {

    useEffect(() => {
        loadScript("/assets/js/custom.js", true)
    })

    return (
        <>
            <SectionSlider1 />
            <SectionWhatWeDo1 _data={data.whatwedo} />
            <SectionWhyChooseUs1 _data={data.whychooseus} />
            <SectionBooking1 _data={data.booking} />
            <SectionEstimation1 _data={data.estimation} />
            <SectionTestimonials1 _data={data.testimonials} />
            <SectionServices1 _data={data.services} />
            <SectionCompanyApproch1 _data={data.approach} />
            <SectionBlogs1 _data={data.blogs} />
            <SectionProjects1 _data={data.projects} />
        </>
    )
}

export default Home1Page;