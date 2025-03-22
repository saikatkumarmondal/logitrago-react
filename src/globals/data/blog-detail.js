import { global } from "../constants";

export const data = {
    banner: {
        background: global.banner + "1.jpg",
        title: "Blog Single",
        crumb: "Blog Single"
    },

    blog: {
        image: global.blogSingle + "1.jpg",
        date: "February 08, 2023",
        commentsCount: "20",
        views: "250",
        relatedTags: [
            "Logistics",
            "Company",
            "Business"
        ],
        prevNextPost: {
            prev: {
                title: "The wise man therefore always holds in these matters to this principle"
            },
            next: {
                title: "Rejects pleasures to secure other greater pleasures"
            }
        },
        comments: {
            total: "02",
            list: [
                {
                    image: global.testim + "pic1.jpg",
                    date: "08 Jan 2023",
                    sender: "Rosalina Kelian",
                    comment: "No one rejects, dislikes, or avoids pleasure itself, because pleasure, but because those who do not know how to pursue. ho do not know how to pursue pleasure rationally encounter consequences.",
                    replies: [
                        {
                            image: global.testim + "pic2.jpg",
                            date: "16 Jan 2023",
                            sender: "Fumio",
                            comment: "Minim veniam, quis nostrud exercitation ullamco lab lorem ipsum dolor sit amet consectetur oris nisi ut aliquip ex ea commodo consequat.",
                            replies: []
                        }
                    ]
                }
            ]
        }
    }
}