export const landingPageContent = {
    title: 'Brian Wachira',
    description: 'Software Engineer'
}

export const aboutContent = {
    title: 'About Me.',
    description: 'With a passion for technology and a focus on continuous learning, I am a software engineer with expertise in JavaScript and a willingness to explore new technologies. I am a proactive problem-solver and enjoy working on complex projects that require me to think creatively and outside the box.'
}

export const experienceContent = {
    title: 'More than 7 years of experience.',
    description:
        'I build web and mobile applications, with a strong preference for mobile development. My experience includes full-stack platforms, AI integrations, offline-first applications and leading open-source contributors.',
    timeline: [
        {
            id: 12,
            title: 'Senior Full Stack Developer (Web & Mobile)',
            company: 'Art Circles, London',
            startDate: 'Feb 2026',
            endDate: 'Apr 2026',
            currentWorkplace: false,
            techStack: [
                { id: '12.1', title: 'Next.js' },
                { id: '12.2', title: 'Golang' },
                { id: '12.3', title: 'Codex' },
            ],
            summary: `
#### Impact
- Worked on a platform for art businesses to manage and monetise their events, collections and communities across Europe and New York.
- Built web and backend functionality using Next.js and Golang, with Codex supporting development.

**Engagement:** Consultancy contract.`,
        },
        {
            id: 11,
            title: 'Full Stack Developer (Web & Mobile)',
            company: 'Skyline Design, New York',
            startDate: 'Jul 2025',
            endDate: null,
            currentWorkplace: true,
            techStack: [
                { id: '11.1', title: 'Vue.js' },
                { id: '11.2', title: 'Remix' },
                { id: '11.3', title: 'React Native' },
                { id: '11.4', title: 'NestJS' },
                { id: '11.5', title: 'BigQuery' },
                { id: '11.6', title: 'Firebase Crashlytics' },
            ],
            summary: `
#### Impact
- Built business intelligence and automation platforms for last-mile organisations in the United States.
- Used BigQuery to investigate logs and identify Zeitview tiles that failed to load in custom mapping workflows.
- Used Firebase Crashlytics to investigate application crashes and support production troubleshooting.

**Engagement:** Consultancy contract.`,
        },
        {
            id: 10,
            title: 'Software Engineer (Mobile, Web & AI)',
            company: 'Amaka Studio, London',
            startDate: 'Dec 2024',
            endDate: 'Oct 2025',
            currentWorkplace: false,
            techStack: [
                { id: '10.1', title: 'React Native' },
                { id: '10.2', title: 'Next.js' },
                { id: '10.3', title: 'TypeScript' },
                { id: '10.4', title: 'Strapi CMS' },
                { id: '10.5', title: 'OpenAI' },
                { id: '10.6', title: 'Vercel AI SDK' },
                { id: '10.7', title: 'PostHog' },
                { id: '10.8', title: 'TestFlight' },
            ],
            summary: `
#### Impact
- Took over a stalled React Native application, stabilised the codebase and helped release it on iOS and Android approximately three months after joining.
- Reworked critical features and unnecessary abstractions, reducing loading time by more than three seconds.
- Built the AI chat interface and backend integration using Next.js, TypeScript, OpenAI and the Vercel AI SDK, connecting natural-language conversations to project and gig management workflows through tool calling.
- Implemented streamed AI responses, saved conversation history and PostHog AI tracing.
- Implemented consent flows, age confirmation, and access to privacy policies and terms of service for West African and European audiences.
- Supported controlled releases through PostHog feature flags and TestFlight.
- Began migrating the mobile application to a newer React Native and Expo architecture before the company closed.

**Engagement:** Consultancy contract.

#### Links
- [Web platform](https://amaka.studio/)
- [Android app](https://play.google.com/store/apps/details?id=com.amaka.mobile)
- [iOS app](https://apps.apple.com/us/app/amaka-mobile/id6741743941)`,
        },
        {
            id: 9,
            title: 'Senior Mobile Engineer',
            company: 'The Open Institute Africa, Nairobi',
            startDate: 'Jun 2024',
            endDate: 'Oct 2024',
            currentWorkplace: false,
            techStack: [
                { id: '9.1', title: 'React Native' },
                { id: '9.2', title: 'Expo' },
                { id: '9.3', title: 'TypeScript' },
                { id: '9.4', title: 'SQLite' },
                { id: '9.5', title: 'SurveyJS' },
                { id: '9.6', title: 'Bluetooth' },
                { id: '9.7', title: 'EAS' },
                { id: '9.8', title: 'CI/CD' },
            ],
            summary: `
#### Impact
- Rebuilt an outdated native Android application as an offline-first React Native application for iOS and Android.
- Enabled survey participation in areas with limited connectivity using SurveyJS within WebViews and local storage through Expo SQLite.
- Implemented synchronisation safeguards to prevent stale or conflicting data.
- Integrated Bluetooth data sharing so field teams could exchange survey responses without internet access.
- Automated build and delivery workflows through CI/CD pipelines.

**Engagement:** Consultancy contract.

#### Links
- [Sabasi Android app](https://play.google.com/store/apps/details?id=com.openinstitute.sabasi)`,
        },
        {
            id: 8,
            title: 'Open-Source Technical Team Lead (React Native)',
            company: 'Rendercon Kenya, Nairobi',
            startDate: 'Mar 2024',
            endDate: 'Oct 2024',
            currentWorkplace: false,
            techStack: [
                { id: '8.1', title: 'React Native' },
                { id: '8.2', title: 'Expo' },
                { id: '8.3', title: 'Zustand' },
                { id: '8.4', title: 'CI/CD' },
            ],
            summary: `
#### Impact
- Coordinated four contributors to deliver the official Rendercon Kenya conference application within a three-month development timeline.
- Introduced pull request templates and contribution guidelines to support consistent collaboration.
- Reviewed contributions and upheld feature tests and reusable components.
- Set up automated CI/CD workflows to support repeatable builds and releases.

#### Links
- [iOS app](https://apps.apple.com/ke/app/renderconke/id6720706528)
- [Android app](https://play.google.com/store/apps/details?id=com.renderconke.RenderConKe&hl=en)
- [Source code](https://github.com/rendercon/RenderconKe-app)`,
        },
        {
            id: 7,
            title: 'Founding Frontend Developer (Web & Mobile)',
            company: 'Metrixx Technologies, Nairobi',
            startDate: 'Mar 2023',
            endDate: 'Dec 2023',
            currentWorkplace: false,
            techStack: [
                { id: '7.1', title: 'React Native' },
                { id: '7.2', title: 'Expo' },
                { id: '7.3', title: 'Next.js' },
                { id: '7.4', title: 'TypeScript' },
                { id: '7.5', title: 'Node.js' },
            ],
            summary: `
#### Impact
- Built RepBuddy's React Native field application and refined its existing Next.js management dashboard.
- Connected sales representatives' visit, stock and order records with management workflows.
- Helped shape the application's structure and workflows for pharmaceutical field sales teams.

**Engagement:** Part-time.

#### Links
- [Android APK](https://bit.ly/48euG6K)`,
        },
        {
            id: 6,
            title: 'Open-Source Technical Team Lead (React Native)',
            company: 'DroidconKE, Nairobi',
            startDate: 'Sep 2022',
            endDate: 'Nov 2024',
            currentWorkplace: false,
            techStack: [
                { id: '6.1', title: 'React Native' },
                { id: '6.2', title: 'Expo' },
                { id: '6.3', title: 'TypeScript' },
                { id: '6.4', title: 'Storybook' },
                { id: '6.5', title: 'Redux Toolkit' },
                { id: '6.6', title: 'RTK Query' },
                { id: '6.7', title: 'Sentry' },
                { id: '6.8', title: 'React Query' },
                { id: '6.9', title: 'React Native Testing Library' },
                { id: '6.10', title: 'CI/CD' },
            ],
            summary: `
#### Impact
- Coordinated 16 contributors across the DroidconKE 2022 and 2023 React Native applications, working within three-month development timelines.
- Established project foundations covering component structure, API integration, testing and automated CI/CD workflows.
- Introduced pull request templates and contribution guidelines to help contributors work consistently.
- Mentored developers through code reviews, upheld tests for new features and encouraged reusable components.

#### Links
- [2023 app](https://bit.ly/3G85qmV)
- [2022 app](https://bit.ly/3V0c9oN)
- [2023 source code](https://github.com/droidconKE/droidconKE2023ReactNative)
- [2022 source code](https://github.com/droidconKE/droidconKE2022ReactNative)`,
        },
        {
            id: 5,
            title: 'Senior Mobile App Developer',
            company: 'Qula',
            startDate: 'Jul 2022',
            endDate: 'Dec 2022',
            currentWorkplace: false,
            techStack: [
                { id: '5.1', title: 'React Native' },
                { id: '5.2', title: 'TypeScript' },
                { id: '5.3', title: 'Figma' },
            ],
            summary: `
#### Impact
- Designed and developed a mobile platform connecting local food vendors with customers.
- Took the application from Figma designs to React Native implementation, building mobile ordering workflows and reusable interfaces.

**Engagement:** Consultancy contract.

#### Links
- [Android APK](https://bit.ly/4cewT4v)`,
        },
        {
            id: 4,
            title: 'Frontend Developer',
            company: 'Olive Tree Media Limited, Nairobi',
            startDate: 'Feb 2022',
            endDate: 'Apr 2025',
            currentWorkplace: false,
            techStack: [
                { id: '4.1', title: 'Vue.js' },
                { id: '4.2', title: 'React' },
                { id: '4.3', title: 'Next.js' },
                { id: '4.4', title: 'Tailwind CSS' },
                { id: '4.5', title: 'Strapi CMS' },
                { id: '4.6', title: 'Supabase' },
                { id: '4.7', title: 'Turborepo' },
            ],
            summary: `
#### Impact
- Established frontend development structures, tooling and shared design systems as a founding frontend developer.
- Built web platforms using React, Tailwind CSS and Strapi CMS, configuring content types and connecting managed content to application interfaces.
- Developed developer resources and survey monitoring portals integrated with BongaSMS.
- Provided technical documentation, sandbox environments and operational support for customers and platform integrations.

**Engagement:** Full-time.

#### Links
- [Olive Tree Media](https://olivetreehub.com)
- [Developer documentation](https://api.olivetreehub.com/)
- [Survey platform](https://survey.bongasms.co.ke/)`,
        },
        {
            id: 3,
            title: 'Mobile Engineer (React Native)',
            company: 'Conceptual Tech Limited, Nairobi',
            startDate: 'Nov 2021',
            endDate: 'Nov 2023',
            currentWorkplace: false,
            techStack: [
                { id: '3.1', title: 'React Native' },
                { id: '3.2', title: 'Expo' },
                { id: '3.3', title: 'TypeScript' },
                { id: '3.4', title: 'SignalR' },
                { id: '3.5', title: 'Sentry' },
                { id: '3.6', title: 'React Native Testing Library' },
                { id: '3.7', title: 'Figma' },
            ],
            summary: `
#### Impact
- Created an iOS design concept in Figma for an existing Android application.
- Translated designs into mobile interfaces using Expo, React Native and TypeScript.
- Tested and refactored reusable components using React Native Testing Library.
- Used Sentry to identify and investigate early production issues.`,
        },
        {
            id: 2,
            title: 'Full Stack Engineer',
            company: 'Dimetech Group (Formerly Eupotech Limited), Nairobi',
            startDate: 'May 2021',
            endDate: 'Sep 2021',
            currentWorkplace: false,
            techStack: [
                { id: '2.1', title: 'Next.js' },
                { id: '2.2', title: 'Node.js' },
                { id: '2.3', title: 'Styled Components' },
                { id: '2.4', title: 'Craft CMS' },
                { id: '2.5', title: 'Strapi CMS' },
                { id: '2.6', title: 'WordPress' },
                { id: '2.7', title: 'PrestaShop' },
            ],
            summary: `
#### Impact
- Proposed and introduced Next.js, Node.js and Strapi CMS as the company's development stack.
- Worked with content-managed websites and commerce platforms using WordPress and PrestaShop.
- Configured CMS content structures to support website development and content publishing.

**Engagement:** Full-time.`,
        },
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Olive Tree Media Limited, Nairobi',
            startDate: 'Sep 2019',
            endDate: 'Feb 2021',
            currentWorkplace: false,
            techStack: [
                { id: '1.1', title: 'Vue.js' },
                { id: '1.2', title: 'Nuxt.js' },
                { id: '1.3', title: 'October CMS' },
                { id: '1.4', title: 'Leaflet.js' },
                { id: '1.5', title: 'Mapbox API' },
                { id: '1.6', title: 'Chart.js' },
            ],
            summary: `
#### Impact
- Translated design mock-ups into a gaming progressive web application designed for more than 5,000 daily users.
- Reduced page loading time from more than 10 seconds to approximately 5 seconds.
- Built content-driven interfaces and interactive mapping and analytics features using October CMS, Leaflet.js, Mapbox and Chart.js.
- Implemented search engine optimisation and analytics improvements.

**Engagement:** Full-time.

#### Lessons Learnt
- Assessing scope early and negotiating realistic delivery timelines.`,
        },
    ],
};

export const projectsContent = {
    title: 'Projects',
    projects: [
        {
            id: 1,
            title: 'droidconKE2023ReactNative',
            description: 'React Native App for the 4th Android Developer Conference in Kenya - droidcon to be held in Nairobi from November 8th-10th 2023.',
            techStack: [
                {
                    id: 2,
                    stack: 'Expo ( React Native )'
                },
                {
                    id: 3,
                    stack: 'React Query'
                },
                {
                    id: 4,
                    stack: 'React Testing Library'
                }
            ],
            websiteLink: 'https://play.google.com/store/apps/details?id=com.ke.droidcon.reactnative&hl=en&gl=US',
            githubLink: 'https://github.com/droidconKE/droidconKE2023ReactNative',
            image: 'images/droidconkereactnative.jpeg'
        },
        {
            id: 2,
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
        {
            id: 3,
            title: 'Sales Reps App',
            description: 'An app for managing sales reps in pharmaceutical companies',
            techStack: [
                {
                    id: 2,
                    stack: 'Expo ( React Native )'
                },
                {
                    id: 3,
                    stack: 'React Query'
                },
                {
                    id: 4,
                    stack: 'React Testing Library'
                }
            ],
            websiteLink: '',
            githubLink: '',
            image: 'images/droidconkereactnative.jpeg'
        },
        {
            id: 4,
            title: 'Restuarants App',
            description: 'An app for ordering food from restuarants and managing the restuarants',
            techStack: [
                {
                    id: 1,
                    stack: 'React Native'
                },
                {
                    id: 2,
                    stack: 'React Testing Library'
                }
            ],
            websiteLink: '',
            githubLink: '',
            image: 'images/droidconkereactnative.jpeg'
        },{
            id: 5,
            title: 'Church App',
            description: 'Coming up with IOS design guidelines for an existing android mobile application using Figma. Translating the design into a mobile app using Expo (React Native) and Typescript. Writing tests for the components used using testing library ( React Native ). Error tracking and monitoring using Sentry',
            techStack: [
                {
                    id: 1,
                    stack: 'React Native'
                },
                {
                    id: 2,
                    stack: 'Figma'
                },
                {
                    id: 3,
                    stack: 'Typescript'
                }
            ],
            websiteLink: '',
            githubLink: '',
            image: 'images/droidconkereactnative.jpeg'
        }
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
