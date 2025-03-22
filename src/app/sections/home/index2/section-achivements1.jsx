import CountUp from "react-countup"

export default function SectionAchivements1({ _data }) {
    return (
        <>
            <div className="section-full site-bg-dark tw-we-achived">
                <div className="container">
                    <div className="tw-we-achived-section">
                        {
                            _data.map((_object, index) => (
                                <div key={index} className={"tw-we-achived-box-warp "+ (index%2 === 1 ? 'bg-skew' : '')}>
                                    <div className="tw-we-achived-box">
                                        <h2 className="counter">
                                            <CountUp end={_object.count} duration={10} />
                                        </h2>
                                        <span>{_object.title}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}