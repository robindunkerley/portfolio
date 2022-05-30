type Project = {
    id: number,
    projectName: string,
    techStack: string[],
    projectBrief: string,
    links?: string[]
}

type ProjectsShape = Project[]

export const myProjects: ProjectsShape = [
    {
        id: 0,
        projectName: 'Zeal Match',
        techStack: ['React Native', 'TypeScript', 'Figma'],
        projectBrief: 'Most recently I have been working as a developer for a mobile application called Zeal Match. I played an integral part in creating the new design scheme, and engineered a number of new features for the app. The experience of working on a large TypeScript codebase alongside multiple developers has been invaluable to my professional development.',
    },
    {
        id: 1,
        projectName: 'Taco Not Taco',
        techStack: ['React JS'],
        projectBrief: 'Project for a local food business. The brief was to create an easily expandable, stylistically minimal single page website with a modern feel. I met the demands of the brief by implementing a block based theme. This gave the site a modern feel, and also meant that the client could easily expand the page with more blocks.',
        links: ['https://robindunkerley.github.io/taconottaco.uk/']
    },
    {
        id: 3,
        projectName: 'Calm Weather',
        techStack: ['React Native', 'TypeScript', 'React Native Skia'],
        projectBrief: 'An app I developed entirely individually. The motivation for creating this app was taking the React Native skillset I learned at Zeal, to ',
    } 
]