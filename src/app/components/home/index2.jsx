import SectionAchivements1 from "../../sections/home/index2/section-achivements1";
import SectionBlogs2 from "../../sections/home/index2/section-blogs2";
import SectionClients1 from "../../sections/home/index2/section-clients1";
import SectionEstimation2 from "../../sections/home/index2/section-estimation2";
import SectionPricing1 from "../../sections/home/index2/section-pricing1";
import SectionProjects2 from "../../sections/home/index2/section-projects2";
import SectionServices2 from "../../sections/home/index2/section-services2";
import SectionSlider2 from "../../sections/home/index2/section-slider2";
import SectionTestimonials2 from "../../sections/home/index2/section-testimonials2";
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2";
import { data } from "../../../globals/data/home2";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Home2Page() {

    useEffect(() => {
        loadScript("/assets/js/custom.js", true)
    })

    return (
        <>
            <SectionSlider2 />
            <SectionWhyChooseUs2 _data={data.whychoosus} />
            <SectionServices2 _data={data.services} />
            <SectionAchivements1 _data={data.achivements} />
            <SectionEstimation2 _data={data.estimation} />
            <SectionClients1 _data={data.clients} />
            <SectionTestimonials2 _data={data.testimonials} />
            <SectionPricing1 _data={data.plans} />
            <SectionProjects2 _data={data.projects} />
            <SectionBlogs2 _data={data.blogs} />
        </>
    )
}

export default Home2Page;