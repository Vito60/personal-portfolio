import caddyApp from '../images/caddyApp.png'
import portfolio from '../images/portfolio.png'
import mechanicApp from '../images/mechanicApp.png'

const projectData = [
    {
        title: 'Portfolio',
        image: portfolio,
        liveLink: 'https://www.rwilliamsportfolio.com/',
        repoLink: 'https://github.com/Vito60/updated-portfolio',
        description: 'An application that allows users to view and add information about professional golfers into a postgreSQL database. Client side was built with React using Redux for state management and the backend is a Rails API using a PostgreSQ. The styling was done with Material-ui.'
    },
    {
        title: 'Caddy App',
        image: caddyApp,
        liveLink: 'https://flamboyant-easley-ea72bf.netlify.app/',
        repoLink: 'https://github.com/Vito60/react-caddy-app-frontend',
        description: 'An application that allows users to view and add information about professional golfers into a postgreSQL database. Client side was built with React using Redux for state management and the backend is a Rails API using a PostgreSQ. The styling was done with Material-ui.'
    },
    {
        title: 'Mechanic App',
        image: mechanicApp,
        liveLink: '/',
        repoLink: '/',
        description: 'Built using Ruby on Rails. This application allows users to create an account to store information about their vehicles and mechanics they use for their vehicles. Utilized OMNIauth and Devise for user authentication also used Oauth2 to allow users to create an account via Facebook.'
    }
]

export default projectData;