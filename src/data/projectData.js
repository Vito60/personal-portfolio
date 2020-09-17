import caddyApp from '../images/caddyApp.png'
import portfolio from '../images/portfolio.png'
import mechanicApp from '../images/mechanicApp.png'

const projectData = [
    {
        title: 'Portfolio',
        image: portfolio,
        liveLink: 'https://www.rwilliamsportfolio.com/',
        repoLink: 'https://github.com/Vito60/personal-portfolio',
        description: 'Personal portfolio designed to showcase my skills as a developer, built using React.JS Designed mobile response experience to incorporate Material UI, which allows access to the theme values directly from the component props to consistently deliver a high-quality dynamic UI and intuitive UX.'
    },
    {
        title: 'Caddy App',
        image: caddyApp,
        liveLink: 'https://flamboyant-easley-ea72bf.netlify.app/',
        repoLink: 'https://github.com/Vito60/react-caddy-app-frontend',
        description: 'Built a golfer dashboard to view and add information about professional golfers. In building this web-based application, I displayed a working knowledge of React.JS, Redux, and RESTful API’s to develop frontend user experience. Developed API following RESTful standards to store data in a PostgreSQL.'
    },
    {
        title: 'Mechanic App',
        image: mechanicApp,
        liveLink: 'https://www.youtube.com/watch?v=9WozoVoxqUc',
        repoLink: 'https://github.com/Vito60/rails-project-mechanic-app',
        description: 'Designed for users to store information about their vehicles and the mechanics they have experience with. The application is built in a MVC style using Ruby on Rails. Utilized OMNIauth and Devise for user authentication along with OAuth2 to allow account creation via Facebook.'
    },
]

export default projectData;