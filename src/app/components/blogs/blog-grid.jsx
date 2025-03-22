import Banner from "../../sections/common/banner";
import SectionSidebar from "../../sections/sidebar/section-sidebar";
import SectionBlogGrid from "../../sections/blogs/section-blog-grid";
import { data } from "../../../globals/data/blog-grid";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

export default function BlogsGridPage() {
    useEffect(() => {
        loadScript("/assets/js/custom.js", true)
    })

    return (
        <>
            <Banner _data={data.banner} />

            <div className="section-full p-t120  p-b90 site-bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            <SectionBlogGrid _data={data.blogs} />

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