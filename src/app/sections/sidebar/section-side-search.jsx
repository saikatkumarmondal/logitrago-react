export default function SectionSideSearch() {
    return (
        <>
            <div className="widget search-bx">
                <form role="search" method="post">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <button className="btn" type="button" id="button-addon2"><i className="fa fa-search" /></button>
                    </div>
                </form>
            </div>
        </>
    )
}