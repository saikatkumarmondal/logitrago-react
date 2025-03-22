import Banner from "../../sections/common/banner";
import SectionWhatWeDo1 from "../../sections/home/index/section-what-we-do1"
import SectionAchivements1 from "../../sections/home/index2/section-achivements1"
import SectionTestimonials1 from "../../sections/home/index/section-testimonials1"
import SectionBlogs1 from "../../sections/home/index/section-blogs1"
import SectionCompanyApproch1 from "../../sections/home/index/section-company-approch1"
import { data } from "../../../globals/data/about-us";

export default function AboutUsPage() {
    return (
        <>
            <Banner _data={data.banner} />
            <SectionWhatWeDo1 _data={data.whatwedo} />
            <SectionAchivements1 _data={data.achivements} />
            <SectionTestimonials1 _data={data.testimonials} />
            <SectionBlogs1 _data={data.blogs} />
            <SectionCompanyApproch1 _data={data.approach} />
        </>
    )
}