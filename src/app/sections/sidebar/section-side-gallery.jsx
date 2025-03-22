export default function SectionSideGallery({ _data }) {
    return (
        <>
            <div className="widget tw-sidebar-gallery-wrap">
                <h4 className="section-head-small mb-4">Gallery</h4>
                <div className="tw-sidebar-gallery">
                    <ul>
                        {
                            _data.map((_object, index) => (
                                <li key={index}>
                                    <div className="tw-service-gallery-thumb">
                                        <a className="elem" href={_object} title="Title 1" data-lcl-author data-lcl-thumb={_object}>
                                            <img src={_object} alt="#" />
                                            <i className="fa fa-file-image-o" />
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}