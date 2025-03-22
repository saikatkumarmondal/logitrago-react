import { useEffect } from "react"
import SectionSlider3 from "../../sections/home/index3/section-slider3"
import SectionWhyChooseUs3 from "../../sections/home/index3/section-why-choose-us3"
import SectionWhatWeDo2 from "../../sections/home/index3/section-what-we-do2"
import SectionEstimation3 from "../../sections/home/index3/section-estimation3"
import SectionServices3 from "../../sections/home/index3/section-services3"
import SectionTestimonials3 from "../../sections/home/index3/section-testimonials3"
import SectionCompanyApproach2 from "../../sections/home/index3/section-company-approach2"
import SectionBooking1 from "../../sections/home/index/section-booking1"
import SectionBlogs3 from "../../sections/home/index3/section-blogs3"
import { data } from "../../../globals/data/home3";
import { loadScript } from "../../../globals/constants"

function Home3Page() {

    useEffect(() => {
        loadScript("/assets/js/custom.js", true)
    })

    return (
        <>
            <SectionSlider3 />
            <SectionWhyChooseUs3 _data={data.whychooseus} />
            <SectionWhatWeDo2 _data={data.whatwedo} />
            <SectionEstimation3 _data={data.estimation} />
            <SectionServices3 _data={data.services} />
            <SectionTestimonials3 _data={data.testimonials} />
            <SectionCompanyApproach2 _data={data.approch} />
            <SectionBooking1 _data={data.booking} />
            <SectionBlogs3 _data={data.blogs} />
        </>
    )
}

export default Home3Page;