export default function SectionLeaveComment() {
    return (
        <>
            <div className="comment-respond m-t30" id="respond">
                <h2 className="comment-reply-title section-head-small mb-4" id="reply-title">Leave a comment
                    <small>
                        <a style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a>
                    </small>
                </h2>
                <form className="comment-form" id="commentform" method="post">
                    <div className="row">
                        <div className="comment-form-author col-md-6 mb-3">
                            <label>Name <span className="required">*</span></label>
                            <input className="form-control" type="text" defaultValue name="user-comment" placeholder="Author" id="author" />
                        </div>
                        <div className="comment-form-email col-md-6 mb-3">
                            <label>Email <span className="required">*</span></label>
                            <input className="form-control" type="text" defaultValue name="email" placeholder="Email" />
                        </div>
                        <div className="comment-form-comment col-md-12 mb-4">
                            <label>Comment</label>
                            <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="btn-half site-button"><span>Submit</span><em /></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}