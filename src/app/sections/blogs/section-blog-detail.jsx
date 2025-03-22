import SectionBlogComments from "./section-blog-comments";
import SectionBlogContent from "./section-blog-content";
import SectionBlogPrevNext from "./section-blog-prev-next";
import SectionLeaveComment from "./section-leave-comment";
import SectionTagsShare from "./section-tags-share";

export default function SectionBlogDetail({_data}) {
    return (
        <>
            <div className="blog-post-single-outer">

                <SectionBlogContent _data={_data} />
                <SectionTagsShare _data={_data.relatedTags} />
                <SectionBlogPrevNext _data={_data.prevNextPost} />

                <div className="clear" id="comment-list">
                    <div className="comments-area" id="comments">
                        <h3 className="section-head-small mb-4">{_data.comments.total} Comments</h3>
                        <div>
                            {/* COMMENT LIST START */}
                            <SectionBlogComments _data={_data.comments}  />
                            {/* COMMENT LIST END */}
                            
                            {/* LEAVE A REPLY START */}
                            <SectionLeaveComment />
                            {/* LEAVE A REPLY END */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}