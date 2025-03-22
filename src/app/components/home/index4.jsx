import SectionSlider4 from "../../sections/home/index4/section-slider4"
import SectionServices1 from "../../sections/home/index/section-services1"
import SectionClients3 from "../../sections/home/index4/section-clients3"
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2"
import SectionEstimation1 from "../../sections/home/index/section-estimation1"
import SectionTestimonials2 from "../../sections/home/index2/section-testimonials2"
import SectionBlogs1 from "../../sections/home/index/section-blogs1"
import SectionCompanyApproch1 from "../../sections/home/index/section-company-approch1"
import SectionProjects2 from "../../sections/home/index2/section-projects2"
import SectionPricing1 from "../../sections/home/index2/section-pricing1"
import { data } from "../../../globals/data/home4";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants"

function Home4Page() {

    useEffect(() => {
        loadScript("/assets/js/custom.js", true)
    })

    return (
        <>
            <SectionSlider4 />
            <SectionServices1 _data={data.services} />
            <SectionClients3 _data={data.clients} />
            <SectionWhyChooseUs2 _data={data.whychoosus} />
            <SectionEstimation1 _data={data.estimation} />
            <SectionTestimonials2 _data={data.testimonials} />
            <SectionBlogs1 _data={data.blogs} />
            <SectionCompanyApproch1 _data={data.approach} />
            <SectionProjects2 _data={data.projects} />
            <SectionPricing1 _data={data.plans} />
        </>
    )
}

export default Home4Page;