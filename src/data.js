// data.js
export const featuresData = {
    sectionTitle: "Features & Services",
    color: "text-white",
    sectionDescription:
        "Discover how SacredSecret empowers you to Manage and Protect your Digital Assets.",
    features: [
        {
            id: 1,
            title: "Manage Your Credentials",
            description: "Discover how SacredSecret empowers you to manage and protect your digital assets.",
            image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 2,
            title: "Smart Notifications",
            description: "Stay informed with intelligent alerts and timely updates.",
            image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 3,
            title: "Choose Your Nominee",
            description: "Select and manage trusted nominees for your digital legacy.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
        },
    ],
};

export const keyfeaturesData = {
    color: "text-white",
    sectionTitle: "Key Features",
    sectionDescription:
        "Experience unmatched security and control with our advanced set of features.",
    features: [
        {
            id: 1,
            title: "Advanced Encryption",
            description: "Military-grade encryption to protect all your sensitive data",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
        },
        {
            id: 2,
            title: "Biometric Authentication",
            description: "Multi-factor authentication with biometric security features",
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            title: "Smart Contracts",
            description: "Automated and secure asset transfer protocols in place",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        },

        {
            id: 4,
            title: "Real-time Alerts",
            description: "Instant notifications for any security-related activities",
            image: "https://cdn.pixabay.com/photo/2020/07/28/12/23/laptop-5444931_1280.jpg",
        },
        // {
        //     id: 5,
        //     title: "Access Control",
        //     description: "Granular control over who can access what",
        //     image: "https://cdn.pixabay.com/photo/2020/04/14/18/25/no-access-5043758_1280.jpg",
        // },
        {
            id: 6,
            title: "Encrypted Storage",
            description: "Your data is encrypted both at  rest and in both at transit.",
            image: "https://cdn.pixabay.com/photo/2017/06/28/05/23/mini-storage-2449794_1280.jpg",
        },
        {
            id: 7,
            title: "Secure Infrastructure",
            description: "Enterprise-grade security infrastructure security-related in place.",
            image: "https://cdn.pixabay.com/photo/2017/08/01/10/42/architecture-2564442_1280.jpg",
        },
    ],
};


export const HeroContant = {
    color: "text-white",
    title: "Welcome to Our Platform",
    description: "Empowering your journey with cutting-edge solutions.",
    btntext: "Get Started"
};

export const products = [

    {
        "image": {
            "src": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "alt": "Product"
        },
        "overlay": {
            "class": "absolute inset-0 bg-blue-600 opacity-60"
        },
        "button": {
            "text": "View Product",
            "class": "bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
        },
        "title": "Puma Sneakers",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
        "price": "$99.99",
        "addToCartButton": {
            "text": "Add to Cart",
            "class": "bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
        }
    },
    {
        "image": {
            "src": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "alt": "Product"
        },
        "overlay": {
            "class": "absolute inset-0 bg-black opacity-40"
        },
        "button": {
            "text": "View Product",
            "class": "bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
        },
        "title": "Adidas Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
        "price": "$59.69",
        "addToCartButton": {
            "text": "Add to Cart",
            "class": "bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
        }
    },
    {
        "image": {
            "src": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "alt": "Product"
        },
        "overlay": {
            "class": "absolute inset-0 bg-black opacity-40"
        },
        "button": {
            "text": "View Product",
            "class": "bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
        },
        "title": "Nike Sneakers",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
        "price": "$9.00",
        "addToCartButton": {
            "text": "Add to Cart",
            "class": "bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
        }
    }
]


export const aboutSection = [
    {
        "type": "heroSection",
        "content": {
            "header": {
                "title": "Hey 👋 I am Jenny Carter",
                "subtext": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                "question": {
                    "text": "Have a question?",
                    "linkText": "Twitter",
                    "linkHref": "#"
                }
            },
            "image": {
                "src": "https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png",
                "alt": "Jenny Carter",
                "background": "https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
            }
        }
    },
    {
        "type": "aboutSection",
        "content": {
            "title": "The Tale of Our Achievement Story",
            "description": "Our achievement story is a testament to teamwork and perseverance. Together, we've overcome challenges, celebrated victories, and created a narrative of progress and success.",
            "stats": [
                {
                    "label": "33+ Years",
                    "description": "Influencing Digital Landscapes Together"
                },
                {
                    "label": "125+ Projects",
                    "description": "Excellence Achieved Through Success"
                },
                {
                    "label": "26+ Awards",
                    "description": "Our Dedication to Innovation Wins Understanding"
                },
                {
                    "label": "99% Happy Clients",
                    "description": "Mirrors our Focus on Client Satisfaction."
                }
            ],
            "button": {
                "text": "Read More",
                "style": "bg-indigo-50 hover:bg-indigo-100"
            },
            "image": {
                "src": "https://pagedone.io/asset/uploads/1717742431.png",
                "alt": "About Us image"
            }
        }
    }
]

export const blogSection = [
    {
        "type": "Article",
        "title": "Boost your conversion rate",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
        "image": "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        "author": {
            "name": "Roel Aufderehar",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        "date": "Mar 16, 2020",
        "readTime": "6 min"
    },
    {
        "type": "Video",
        "title": "How to use search engine optimization to drive sales",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
        "image": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        "author": {
            "name": "Brenna Goyette",
            "image": "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        "date": "Mar 10, 2020",
        "readTime": "4 min"
    },
    {
        "type": "Case Study",
        "title": "Improve your customer experience",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
        "image": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        "author": {
            "name": "Daniela Metz",
            "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        "date": "Feb 12, 2020",
        "readTime": "11 min"
    }
]


export const blogDetails = [
    {
        "id": "1",
        "type": "Article",
        "title": "Boost your conversion rate",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum nulla eu ligula efficitur, sit amet dignissim ante euismod. Nam ac nisl nec urna malesuada tincidunt. Morbi ut magna ante. Integer tincidunt interdum nulla, ac sodales purus hendrerit id. Mauris sed metus at ipsum volutpat maximus.",
        "image": "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        "author": {
            "name": "Roel Aufderehar",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        "date": "Mar 16, 2020",
        "readTime": "6 min",
        "tags": ["conversion", "marketing", "sales"],
        "categories": ["Business", "Marketing"]
    },
    {
        "id": "2",
        "type": "Video",
        "title": "How to use search engine optimization to drive sales",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
        "content": "Search engine optimization (SEO) is an essential strategy for increasing your website's visibility on search engines. This video explains how to optimize your website to attract organic traffic, improve user engagement, and drive conversions.",
        "image": "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        "author": {
            "name": "Brenna Goyette",
            "image": "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        "date": "Mar 10, 2020",
        "readTime": "4 min",
        "tags": ["SEO", "sales", "marketing"],
        "categories": ["Digital Marketing", "Sales"]
    },
    {
        "id": "3",
        "type": "Case Study",
        "title": "Improve your customer experience",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
        "content": "In this case study, we explore how a company successfully improved their customer experience by implementing personalized touchpoints, improving customer support channels, and optimizing the user journey. Discover the strategies that made a difference and how you can apply them to your business.",
        "image": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        "author": {
            "name": "Daniela Metz",
            "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        "date": "Feb 12, 2020",
        "readTime": "11 min",
        "tags": ["customer experience", "CX", "strategy"],
        "categories": ["Customer Service", "Business"]
    }
]

