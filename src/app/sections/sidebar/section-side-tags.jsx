export default function SectionSideTags({_data}) {
    return (
        <>
            <div className="widget tw-sidebar-tags-wrap">
                <h4 className="section-head-small mb-4">All Tags</h4>
                <div className="tagcloud">
                    {
                        _data.map((_object, index)=>(
                            <a key={index} href="#">{_object}</a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}