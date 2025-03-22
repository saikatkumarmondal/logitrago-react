import { global } from "../constants";

export const data = {
    banner: {
        background: global.banner + "1.jpg",
        title: "About Us",
        crumb: "About Us"
    },

    whatwedo: {
        title: "What we do!",
        subtitle: "Specialist Logistics Services",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.",
        image: global.icons + "img1.png",
        works: [
            {
                icon: global.icons + "pic1.png",
                serial: "01.",
                title: "Road Freight",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            },
            {
                icon: global.icons + "pic2.png",
                serial: "02.",
                title: "Shipping Freight",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            },
            {
                icon: global.icons + "pic3.png",
                serial: "03.",
                title: "Air Freight",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
        ]
    },

    achivements: [
        {
            count: "12",
            title: "Warehouses in U.S.A"
        },
        {
            count: "15",
            title: "Year of experience work with U.S.A"
        },
        {
            count: "60",
            title: "Kg Minimum lot valume"
        }
    ],

    testimonials: {
        title: "Respected",
        subtitle: "Clients & partners",
        clients: [
            global.logo + "/w1.png",
            global.logo + "/w2.png",
            global.logo + "/w3.png",
            global.logo + "/w4.png",
            global.logo + "/w5.png",
            global.logo + "/w6.png",
        ],
        partners: [
            {
                pic: global.testim + "pic1.jpg",
                quote: "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
                name: "Peter Len",
                designation: "Web Designer"
            },
            {
                pic: global.testim + "pic2.jpg",
                quote: "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
                name: "Giselle",
                designation: "Developer"
            },
            {
                pic: global.testim + "pic3.jpg",
                quote: "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
                name: "Josephine",
                designation: "Web Designer"
            },
            {
                pic: global.testim + "pic4.jpg",
                quote: "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
                name: "Penelope",
                designation: "Developer"
            }
        ]
    },

    blogs: {
        title: "Our Blogs",
        subtitle: "Recent news & events",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.",
        blogs: [
            {
                image: global.blog1 + "bg1.jpg",
                day: "02",
                month: "Aug",
                title: "At the end of the day, going forward, a new normal that has evolved from.",
                description: "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
            },
            {
                image: global.blog2 + "l-1.jpg",
                day: "08",
                month: "Aug",
                title: "How all this mistaken idea denouncing pleasure and praising pain was.",
                description: "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
            },
            {
                image: global.blog1 + "bg3.jpg",
                day: "21",
                month: "Aug",
                title: "Going forward, a new normal that has evolved from generation.",
                description: "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
            }
        ]
    },

    approach: {
        title: "Company Approch",
        subtitle: "Reliable Logistic & Transport Solutions",
        yearsOfExperience: "35",
        specifications: [
            {
                icon: global.icons + "c-pic1.png",
                count: "195",
                title: "Professional Staff"
            },
            {
                icon: global.icons + "c-pic2.png",
                count: "250",
                title: "On Time Delievery"
            },
            {
                icon: global.icons + "c-pic3.png",
                count: "350",
                title: "Technology and Media"
            }
        ]
    }
}