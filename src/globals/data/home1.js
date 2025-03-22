import { global } from "../constants";

export const data = {
  whatwedo: {
    title: "Our Work!",
    subtitle: "Trusted for Our Services",
    description:
      "We excel in providing complete elevator, escalator, and spare parts solutions, prioritizing reliability, efficiency, and safety at every step. Our expertise spans across:",
    image: global.icons + "img1.png",
    works: [
      {
        icon: global.icons + "pic1.png",
        serial: "01.",
        title: "VERTICAL TRANSPORT",
        description:
          "We offer high-performance elevators for residential, commercial, and industrial buildings, ensuring safe and efficient vertical mobility through tailored solutions. View More ",
      },
      {
        icon: global.icons + "pic2.png",
        serial: "02.",
        title: "HORIZONTAL TRANSPORT",
        description:
          "Our escalators and moving walkways provide efficient and reliable solutions for public spaces, enhancing passenger flow and promoting smooth, energy-efficient transportation. View More ",
      },
      {
        icon: global.icons + "pic3.png",
        serial: "03.",
        title: "SPARE PARTS SOLUTIONS",
        description:
          "We offer genuine spare parts for elevators and escalators, ensuring optimal performance and reducing downtime for long-term reliability. View More",
      },
    ],
  },

  whychooseus: {
    background: global.back + "bg-1.jpg",
    title: "Why Choose Us",
    subtitle: "Ningbo SIFA Elevator Co. Ltd.",
    description: {
      short:
        "Ningbo SIFA Elevator Co., Ltd. is a trusted leader in vertical transportation, offering high quality elevators and escalators for residential, commercial, and industrial use.",
      long: "We specialize in passenger, villa, freight, and panoramic elevators, as well as key components like control systems, door operators, and safety gear. Our products are built to meet international safety and performance standards, ensuring reliability and durability in every installation.",
    },
    pic1: global.whyChoose + "pic1.jpg",
    pic2: global.whyChoose + "pic2.jpg",
    help: {
      icon: global.whyChoose + "qt-icon.png",
      number: "(2 900 234 4241)",
    },
  },

  booking: {
    background: global.booking + "bg-map.png",
    image: global.booking + "pic1.png",
    imageBack: "",
    title: "Request A Quote",
    subtitle: "Booking For Product Transformation",
    description:
      "Reliable elevators and escalators for safe, efficient, and long-lasting performance.  ",
    form: {
      quote: global.booking + "icon1.png",
      track: global.booking + "icon2.png",
    },
  },

  estimation: {
    background: global.back + "bg-2.jpg",
    title: "Our Work ",
    subtitle: "Has a wide range of solutions",
    description:
      "Reliable elevators and escalators for safe, efficient, and long-lasting performance.",
    solutions: [
      {
        serial: "01",
        title: "Solutions and specialized expertise",
        subtitle:
          "Our aim is to optimize and improve your supply chain so that we can give you the best service",
      },
      {
        serial: "02",
        title: "Multiple warehouses",
        subtitle:
          "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
      },
      {
        serial: "03",
        title: "Tracking made easy",
        subtitle:
          "A tracking number for the entire process. so that you can find the exact position. it will help you",
      },
    ],
  },

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
        quote:
          "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
        name: "Peter Len",
        designation: "Web Designer",
      },
      {
        pic: global.testim + "pic2.jpg",
        quote:
          "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
        name: "Giselle",
        designation: "Developer",
      },
      {
        pic: global.testim + "pic3.jpg",
        quote:
          "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
        name: "Josephine",
        designation: "Web Designer",
      },
      {
        pic: global.testim + "pic4.jpg",
        quote:
          "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
        name: "Penelope",
        designation: "Developer",
      },
    ],
  },

  services: {
    title: "All services",
    subtitle: "Trusted For Our Services",
    description: `We excel in providing complete elevator, escalator, and spare parts solutions, prioritizing reliability, efficiency, and safety at every step. 
Our expertise spans across: `,
    services: [
      {
        image: global.sgallery + "1.jpg",
        title: "VERTICAL TRANSPORT ",
        serial: "01",
        description: `We provide high-performance elevators tailored 
for residential, commercial, and industrial use, 
ensuring safe and efficient vertical mobility.`,
      },
      {
        image: global.sgallery + "2.jpg",
        title: "HORIZONTAL TRANSPORT",
        serial: "02",
        description: `Our escalators and moving walkways deliver 
smooth, energy-efficient solutions for public 
spaces, enhancing passenger flow with reliability. `,
      },
      {
        image: global.sgallery + "3.jpg",
        title: "SPARE PARTS SOLUTIONS",
        serial: "03",
        description: `We offer genuine spare parts for elevators and 
escalators, ensuring optimal performance and 
reducing downtime for long-term reliability. `,
      },
      {
        image: global.sgallery + "4.jpg",
        title: "Rail Freight",
        serial: "04",
        description:
          "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
      },
      {
        image: global.sgallery + "5.jpg",
        title: "Warehousing",
        serial: "05",
        description:
          "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
      },
      {
        image: global.sgallery + "6.jpg",
        title: "Project Cargo",
        serial: "06",
        description:
          "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
      },
    ],
  },

  approach: {
    title: "Company Approch",
    subtitle: "Reliable Logistic & Transport Solutions",
    yearsOfExperience: "35",
    specifications: [
      {
        icon: global.icons + "c-pic1.png",
        count: 195,
        title: "Professional Staff",
      },
      {
        icon: global.icons + "c-pic2.png",
        count: 250,
        title: "On Time Delievery",
      },
      {
        icon: global.icons + "c-pic3.png",
        count: 350,
        title: "Technology and Media",
      },
    ],
  },

  blogs: {
    title: "Our Blogs",
    subtitle: "Recent news & events",
    description: `Ningbo SIFA Elevator Co., Ltd. is a trusted 
leader in vertical transportation, offering high
quality elevators and escalators for residential, 
commercial, and industrial use. We specialize in 
passenger, villa, freight, and panoramic elevators, 
as well as key components like control systems, 
door operators, and safety gear. Our products are 
built to meet international safety and performance 
standards, ensuring reliability and durability in 
every installation. `,
    blogs: [
      {
        image: global.blog1 + "bg1.jpg",
        day: "02",
        month: "Aug",
        title:
          "At the end of the day, going forward, a new normal that has evolved from.",
        description:
          "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.",
      },
      {
        image: global.blog2 + "l-1.jpg",
        day: "08",
        month: "Aug",
        title:
          "How all this mistaken idea denouncing pleasure and praising pain was.",
        description:
          "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.",
      },
      {
        image: global.blog1 + "bg3.jpg",
        day: "21",
        month: "Aug",
        title: "Going forward, a new normal that has evolved from generation.",
        description:
          "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.",
      },
    ],
  },

  projects: {
    title: "Projects",
    subtitle: "Featured Projects",
    projects: [
      {
        image: global.projects + "1.jpg",
        title: "Warehousing, Distrbution",
        subtitle: "Warehouse inventory",
        caption: "Nh-16 Highway Bridge",
      },
      {
        image: global.projects + "2.jpg",
        title: "Logistics, Analytics",
        subtitle: "Minimize Manufacturing",
        caption: "Nh-16 Highway Bridge",
      },
      {
        image: global.projects + "3.jpg",
        title: "Warehousing, Distrbution",
        subtitle: "Warehouse inventory",
        caption: "Nh-16 Highway Bridge",
      },
    ],
  },
};
