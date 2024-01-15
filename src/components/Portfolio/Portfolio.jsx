import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [ 
    {
      name: "Youtube-Clone",
      deployedLink: "https://youtube.ranjansharma.info.np/",
      image: require('../../assets/youtube.png'),
      description: "YoutubeClone: a React JS and Material UI 5-based YouTube replica. Enjoy seamless video browsing all with a sleek and intuitive interface. YouTube experience to life with modern web tech.",
      fadeDuration: "1100",
      toolsUsed: ['React','MongoDb','NodeJs','Express','MUI', 'JWT','Web sockets']
    },
    { 
      name : "3D-Simple-Harmonic-Motion-Visualization",
      deployedLink: "https://shm.ranjansharma.info.np/",
      image: require('../../assets/starship.gif'),
      fadeDuration:'1000',
      description: 'StarShip provides users the platform to track stock market data. Users are able to track the market in general or they can search up a specific stock.',
      toolsUsed: ['React','MongoDb','NodeJs','Express','MUI','GraphQl', 'JWT', 'PWA']
    
    },

    {
      name : "Rust-Ai-Car_Driving",
      deployedLink: "https://youtu.be/BzCkSsQmezE?si=9nDR2ga73ZizcMFH",
      image: require('../../assets/rust.gif'),
      fadeDuration:'1200',
      description:"CMS-style blog site that can publish articles, blog posts, thoughts and opinions",
      toolsUsed: ['Handlebars','mySQl','NodeJs','Express','Bootstrap','sequelize']
    },
    {
      name:"Discord Music Bot",
      deployedLink: "https://discord.com/api/oauth2/authorize?client_id=1195042358371291327&permissions=8&scope=bot",
      image: require('../../assets/bot.png'),
      fadeDuration:'1300',
      description:"A web application designed to allow users to get directions and uses real-time traffic information to find the best route to your destination.",
      toolsUsed: ['Mapbox API','tailwind','HTML/CSS','localStorage']
    },
    {
      name: "Pixel-Visualization",
      deployedLink: "https://pixel.ranjansharma.info.np/",
      image: require('../../assets/pixel.gif'),
      fadeDuration:'1500',
      description:"A full stack web application that allows users to buy cars, book test drives and so much more",
      toolsUsed: ['Handlebars','mySQl','NodeJs','Express','Bootstrap','sequelize']
    },
    
    {
      name:"Netflix-Clone",
      deployedLink: "https://netflix-ranjansharma.vercel.app/browse",
      image: require('../../assets/netflix.png'),
      fadeDuration:'1500',
      description:"A Progressive web application that allows users to create notes or code snippets with or without an internet connection so they can reliably retrieve them for later use",
      toolsUsed: ['indexDb','HTML/CSS','localStorage','Webpack']
    }
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };




  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink,description,toolsUsed, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3
               className='portfolio__item-name'
               onClick={() => handleClick({name,image,deployedLink, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/snow1burnt/${name}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >Live Demo</a>
              </div>
          </article>
           ))
         }

        </div>

         {isModalOpen && (<Modal
           closeModal={handleClick}
           project={selectedProject}
         />)}
    </section>
  )
}

export default Portfolio