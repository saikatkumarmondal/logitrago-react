import { NavLink } from "react-router-dom"

export default function SectionBlogComments({ _data }) {
    return (
        <>
            <ol className="comment-list">

                {
                    _data.list.map((_object, index) => (
                        <li key={index} className="comment">
                            {/* COMMENT BLOCK */}
                            <CommentBox _data={_object} />

                            {/* SUB COMMENT BLOCK */}
                            <ol className="children">

                                {
                                    _object.replies.map((_object2, index2) => (
                                        <li key={index2} className="comment odd parent">
                                            <CommentBox _data={_object2} />
                                        </li>
                                    ))
                                }

                            </ol>
                        </li>
                    ))
                }

            </ol>
        </>
    )
}


function CommentBox({ _data }) {
    return (
        <>
            <div className="comment-body">
                <div className="comment-author">
                    <img className="avatar photo" src={_data.image} alt="#" />
                    <div className="comment-meta">
                        <NavLink to="/about-us">{_data.date}</NavLink>
                    </div>
                </div>
                <div className="comment-info">
                    <cite className="fn">{_data.sender}</cite>
                    <div className="reply">
                        <NavLink to="/about-us" className="comment-reply-link">Reply</NavLink>
                    </div>
                    <p>{_data.comment}
                    </p>
                </div>
            </div>
        </>
    )
}