export const landingPageContent = {
    title: 'Brian Wachira',
    description: 'Software Engineer'
}

export const aboutContent = {
    title: 'About Me.',
    description: 'With a passion for technology and a focus on continuous learning, I am a software engineer with expertise in JavaScript and a willingness to explore new technologies. I am a proactive problem-solver and enjoy working on complex projects that require me to think creatively and outside the box.'
}

export const experienceContent = {
    title: 'Over 2 years experience.',
    description: '',
    timeline: [
        {
            id: 4,
            title: 'Software Developer',
            company: 'Olive Tree Media Limited, Nairobi',
            startDate: 'Feb 2022',
            endDate: null,
            currentWorkplace: true,
        },
        {
            id: 3,
            title: 'Mobile Engineer ( React Native )',
            company: 'Conceptual Tech Limited, Nairobi',
            startDate: 'Nov 2022',
            endDate: null,
            currentWorkplace: true,
        },
        {
            id: 2,
            title: 'Full Stack Engineer',
            company: 'Dimetech Group( Formerly Eupotech Limited), Nairobi',
            startDate: 'May 2021',
            endDate: 'Sep 2021',
            currentWorkplace: false,
        },
        {
            id: 1,
            title: 'Software Developer',
            company: 'Olive Tree Media Limited, Nairobi',
            startDate: 'Sep 2019',
            endDate: 'Feb 2021',
            currentWorkplace: false,
        },
    ]
}

export const projectsContent = {
    title: 'Projects',
    projects: [
        {
            id: 1,
            title: 'droidconKE2022ReactNative',
            description: 'React Native App for the 3rd Android Developer Conference in Kenya - droidcon to be held in Nairobi from November 16-18th 2022.',
            techStack : [
                {
                    id: 2,
                    stack: 'Expo ( React Native )'
                },
                {
                    id: 3,
                    stack: 'Redux'
                },
                {
                    id: 4,
                    stack: 'RTKQuery'
                }
            ],
            websiteLink: 'https://play.google.com/store/apps/details?id=com.brianwachira.droidconKE2022ReactNative&hl=en&gl=US',
            githubLink: 'https://github.com/droidconKE/droidconKE2022ReactNative',
            image: 'images/droidconkereactnative.jpeg'
        },
    ]
} 

export const skillsContent = {
    title: 'Skills.',
    description: 'With a diverse range of skills, including expertise in ReactJS, React Native, NodeJS, MongoDB, and GraphQL, I am a versatile software engineer with the ability to tackle a wide variety of projects and challenges.',
    expertise: [
        {
            id: 1,
            name: 'Front-end Development',
            skills: [
                {
                    id: 4,
                    name: 'HTML',
                    icon: '/icons/html-5.png'
                },
                {
                    id: 5,
                    name: 'CSS',
                    icon: '/icons/css.png'
                },
                {
                    id: 6,
                    name: 'SASS',
                    icon: '/icons/sass.png'
                },
                {
                    id: 2,
                    name: 'Javascript',
                    icon: '/icons/js.png'
                },
                {
                    id: 3,
                    name: 'Typescript',
                    icon: '/icons/typescript.png'
                },
                {
                    id: 7,
                    name: 'React',
                    icon: '/icons/react-2.svg'
                },
                {
                    id: 8,
                    name: 'NextJS',
                    icon: '/icons/next-js.svg'
                },
                {
                    id: 9,
                    name: 'Bootstrap',
                    icon: '/icons/bootstrap.png'
                },
                {
                    id: 10,
                    name: 'TailwindCSS',
                    icon: '/icons/tailwindcss.svg'
                },

            ]
        },
        {
            id: 11,
            name: 'Mobile App Development',
            skills: [
                {
                    id: 12,
                    name: 'React Native',
                    icon: '/icons/react-native-1.svg'
                },

            ]
        },
        {
            id: 13,
            name: 'Backend Development',
            skills: [
                {
                    id: 14,
                    name: 'NodeJS',
                    icon: '/icons/nodejs-1.svg',
                },
                {
                    id: 15,
                    name: 'ExpressJS',
                    icon: '/icons/express-109.svg',
                },
                {
                    id: 16,
                    name: 'GraphQL',
                    icon: '/icons/graphql-logo-2.svg'
                },
                {
                    id: 17,
                    name: 'MongoDB',
                    icon: '/icons/mongodb-icon-1.svg'
                },

            ]
        },
        {
            id: 18,
            name: 'Testing',
            skills: [
                {
                    id: 19,
                    name: 'Testing Library ( React / React Native)',
                    icon: '/icons/testing-library.png'
                },
                {
                    id: 21,
                    name: 'Cypress',
                    icon: '/icons/cypress.svg'
                },
                {
                    id: 20,
                    name: 'Jest',
                    icon: '/icons/jest.svg'
                },
            ]
        },
        {
            id: 22,
            name: 'UI Design',
            skills: [
                {
                    id: 23,
                    name: 'Figma',
                    icon: '/icons/figma-1.svg'
                },
                {
                    id: 24,
                    name: 'Adobe XD',
                    icon: '/icons/adobe-xd-2.svg'
                }
            ]
        }
    ]
}

export const socialMediaProfileContent = [
    {
        name: 'Github',
        href: "https://github.com/brianwachira",
        icon: "/icons/github-filled.svg"
    },
    {
        name: 'Behance',
        href: "https://www.behance.net/brianwachira",
        icon: "/icons/BehanceCircleFilled.svg"
    },
    {
        name: 'LinkedIn',
        href: "https://www.linkedin.com/in/brianwachira/",
        icon: "/icons/linkedin-with-circle.svg"
    },
    {
        name: 'Twitter',
        href: "https://twitter.com/mr_brianwachira",
        icon: "/icons/twitter-circle-filled.svg"
    }
]