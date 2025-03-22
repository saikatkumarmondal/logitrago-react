import { NavLink } from "react-router-dom"

export default function SectionSideServices({_data}) {
    return (
        <>
            <div className="widget all_services_list">
                <h4 className="section-head-small mb-4">Transport Services</h4>
                <div className="all_services m-b30">
                    <ul>
                        {
                            _data.map((_object, index)=>(
                                <li key={index}><NavLink to="/services/services1">{_object}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}