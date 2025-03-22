import Banner from "../../sections/common/banner";
import SectionBlogDetail from "../../sections/blogs/section-blog-detail";
import SectionSidebar from "../../sections/sidebar/section-sidebar";
import { data } from "../../../globals/data/blog-detail";
import { loadScript } from "../../../globals/constants";
import { useEffect } from "react";

export default function BlogsDetailPage() {
    useEffect(() => {
        loadScript("/assets/js/custom.js", true)
    })

    return (
        <>
            <Banner _data={data.banner} />

            <div className="section-full  p-t120 p-b90 bg-white">
                <div className="container">
                    {/* BLOG SECTION START */}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 col-md-12">

                                {/* BLOG START */}
                                <SectionBlogDetail _data={data.blog} />

                            </div>
                            <div className="col-lg-4 col-md-12 rightSidebar side-bar">

                                <SectionSidebar />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}