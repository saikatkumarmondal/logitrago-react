import SectionBookService from "./section-book-service"
import SectionServiceContent from "./section-service-content"

export default function SectionServiceDetail() {
    return (
        <>
            <div className="service-full-info">
                <div className="services-etc m-b30">
                    
                    <SectionServiceContent />
                    <SectionBookService />

                </div>
            </div>
        </>
    )
}