import { global } from "../constants";

export const data = {
    banner: {
        background: global.banner + "1.jpg",
        title: "Our Services Two",
        crumb: "Our Services Two"
    },

    services: {
        title: "All services",
        subtitle: "Trusted For Our Services",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.",
        services: [
            {
                icon: global.icons + "pic1.png",
                serial: "01",
                title: "Air Freight",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service."
            },
            {
                icon: global.icons + "pic2.png",
                serial: "02",
                title: "Road Freight",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service."
            },
            {
                icon: global.icons + "pic3.png",
                serial: "03",
                title: "Ocean Freight",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service."
            },
            {
                icon: global.icons + "pic4.png",
                serial: "04",
                title: "Rail Freight",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service."
            },
            {
                icon: global.icons + "pic5.png",
                serial: "05",
                title: "Warehousing",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service."
            },
            {
                icon: global.icons + "pic6.png",
                serial: "06",
                title: "Project Cargo",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service."
            }
        ]
    },

    estimation: {
        title: "Estimation",
        subtitle: "Has a wide range of solutions",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.",
        solutions: [
            {
                serial: "01",
                icon: global.eicons + "pic1.png",
                title: "Solutions and specialized",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service"
            },
            {
                serial: "02",
                icon: global.eicons + "pic2.png",
                title: "Multiple warehouses",
                description: "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind..."
            },
            {
                serial: "03",
                icon: global.eicons + "pic3.png",
                title: "Tracking made easy",
                description: "A tracking number for the entire process. so that you can find the exact position. this process will help you"
            }
        ]
    },

    booking: {
        background: global.booking + "bg-map.png",
        image: global.booking + "pic1.png",
        imageBack: "",
        title: "Request A Quote",
        subtitle: "Booking For Product Transformation",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.",
        form: {
            quote: global.booking + "icon1.png",
            track: global.booking + "icon2.png"
        }
    },

    plans: {
        title: "Our Plan",
        subtitle: "The right price for you whoever you are",
        plans: [
            {
                type: "Startup",
                price: "90$",
                benifits: [
                    "Additional",
                    "Warehouing",
                    "Custos Borkerage",
                    "Unlimited Transfer"
                ]
            },
            {
                type: "Standard",
                price: "150$",
                benifits: [
                    "Additional",
                    "Warehouing",
                    "Custos Borkerage",
                    "Unlimited Transfer"
                ]
            },
            {
                type: "Business",
                price: "260$",
                benifits: [
                    "Additional",
                    "Warehouing",
                    "Custos Borkerage",
                    "Unlimited Transfer"
                ]
            }
        ]
    }
}