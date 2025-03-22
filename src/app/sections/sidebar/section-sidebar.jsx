import SectionSideContact from "./section-side-contact";
import SectionSideGallery from "./section-side-gallery";
import SectionSidePosts from "./section-side-posts";
import SectionSideSearch from "./section-side-search";
import SectionSideServices from "./section-side-services";
import SectionSideTags from "./section-side-tags";
import { data } from "../../../globals/data/sidebar";

export default function SectionSidebar() {
    return (
        <>
            <SectionSideSearch />
            <SectionSideServices _data={data.allservices} />
            <SectionSidePosts _data={data.posts} />
            <SectionSideGallery _data={data.gallery} />
            <SectionSideTags _data={data.tags} />
            <SectionSideContact />
        </>
    )
}