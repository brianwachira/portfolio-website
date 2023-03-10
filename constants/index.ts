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
            techStack: [{ id: '4.1', title: 'VueJS' }, { id: '4.2', title: 'ReactJS' }, { id: '4.3', title: 'NextJS' }, { id: '4.4', title: 'TailwindCSS' }, { id: '4.5', title: 'StrapiCMS' }],
            summary: `
#### Achievements so far 
- Being the founding UI engineer, I have laid out development structures and tooling for the incoming front-end team members
- Built developer resources portal as the company taps into the developer market.`
        },
        {
            id: 3,
            title: 'Mobile Engineer ( React Native )',
            company: 'Conceptual Tech Limited, Nairobi',
            startDate: 'Nov 2022',
            endDate: null,
            currentWorkplace: true,
            techStack: [{ id: '3.1', title: 'Expo' }, { id: '3.2', title: 'SignalR' }, { id: '3.3', title: 'Typescript' }, { id: '3.4', title: 'Sentry' }],
            summary: `
#### Impact
- Came up with IOS design guidelines for an existing android mobile application using Figma.  
- Translated the design into a mobile app using Expo (React Native) and Typescript.  
- Ensured feature efficiency through testing and refactoring of components used using testing library ( React Native ).  
- Ensured the app is production ready by tracking early production bugs using  Sentry Error tracking and monitoring tool.`

        },
        {
            id: 2,
            title: 'Full Stack Engineer',
            company: 'Dimetech Group( Formerly Eupotech Limited), Nairobi',
            startDate: 'May 2021',
            endDate: 'Sep 2021',
            currentWorkplace: false,
            techStack: [{ id: '2.1', title: 'NextJS' }, { id: '2.2', title: 'Styled Components' }, { id: '2.3', title: 'CraftCMS' }, { id: '2.4', title: 'StrapiCMS' }],
            summary: `
#### Impact
- Successfully pitched and transitioned company tech stack into modern ones`


        },
        {
            id: 1,
            title: 'Software Developer',
            company: 'Olive Tree Media Limited, Nairobi',
            startDate: 'Sep 2019',
            endDate: 'Feb 2021',
            currentWorkplace: false,
            techStack: [{ id: '1.1', title: 'VueJS' }, { id: '1.2', title: 'NuxtJS' }, { id: '1.3', title: 'OctoberCMS' }, { id: '1.4', title: 'LeafletJS  MapBox API' }, { id: '1.5', title: 'ChartJS' }],
            summary: `
#### Impact
- Transformed website design mock-ups for a gaming progressive web app, to be used by an estimated 5000+ users daily.
- Reduced website page load from > 10 seconds to ~5 seconds.
-  Implemented SEO - increasing traffic by 10% and analytics by 40%
#### Lessons Learnt
- Negotiating for realistic deadlines.`

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
            techStack: [
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