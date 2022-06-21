
import { calmWeatherImages, zealImages, zealWebsiteContent } from "../assets"

export const myProjects = [
    {
        id: 0,
        projectName: 'Zeal Match App',
        techStack: 'React Native | TypeScript | Figma',
        projectBrief: 'Most recently I have been working as a developer for a mobile application called Zeal Match. I played an integral part in creating the new design scheme, and engineered a number of new features for the app. The experience of working on a large TypeScript codebase alongside multiple developers has been invaluable to my professional development.',
        links: ['https://www.zealmatch.com/'],
        images: zealImages,
    },
    {
        id: 1,
        projectName: 'Zeal Match Website',
        techStack: 'React JS | Gatsby | React Spring',
        projectBrief: "For this project I was briefed with updating Zeal's previous website to be inline with its v2 relaunch. Working on top of an older codebase to update and restyle the website was really useful for my development as a frontend developer. I gained a lot of useful experience working with forms, and using animations and video content to style my sites.",
        links: ['https://www.zealmatch.com/'],
        images: zealWebsiteContent,
    },
    {
        id: 2,
        projectName: 'Calm Weather',
        techStack: 'React Native |  TypeScript | React Native Skia',
        projectBrief: 'An app I developed entirely individually. The motivation for creating this app was to develop upon React Native skillset I learned at Zeal, and to experiment with an animation library called React Native Skia. Utilising Skia I was able to create a really clean animated weather themed UI. The app will soon be available on the Apple app store.',
        links: ['https://github.com/robindunkerley/CalmWeather'],
        images: calmWeatherImages,
    },
    {
        id: 3,
        projectName: 'Taco Not Taco',
        techStack: 'React Js',
        projectBrief: 'Project for a local food business. The brief was to create an easily expandable, stylistically minimal single page website with a modern feel. I met the demands of the brief by implementing a block based theme. This gave the site a modern feel, and also meant that the client could easily expand the page with more blocks.',
        links: ['https://robindunkerley.github.io/taconottaco.uk/'],
        images: calmWeatherImages
    },
]