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
        description: `Streamline, a Youtube-Clone, is a React JS and Material UI 5-based platform replicating 
        the YouTube experience with a focus on minimalism and user-friendliness. It is a minimalist video streaming platform inspired 
        by the functionality and aesthetic of YouTube. This project showcases my ability to replicate and simplify complex web 
        applications, focusing on user experience and streamlined design.`,
        fadeDuration: "1100",
        toolsUsed: ['React', 'NodeJs', 'HTML', 'CSS', 'JWT', 'API']
      },
      
    { 
      name : "3D-Simple-Harmonic-Motion-Visualization",
      deployedLink: "https://shm.ranjansharma.info.np/",
      image: require('../../assets/shm.gif'),
      fadeDuration:'1000',
      description: 'This project presents an interactive 3D visualization tool for Simple Harmonic Motion (SHM), designed to bring complex physics concepts to life. The application enables users to explore the nuances of SHM through a dynamic and engaging virtual environment.',
      toolsUsed: ['P5JS','WebGL','Js','HTML','CSS','JS library']
    
    },
    { 
      name : "Rust-Ai-Car_Driving",
      deployedLink: "https://youtu.be/BzCkSsQmezE?si=9nDR2ga73ZizcMFH",
      image: require('../../assets/rust.png'),
      fadeDuration:'1200',
      description: 'Rust-Ai-Car_Driving is an exhilarating project set in a road-fighter inspired virtual world. This interactive experience explores the fusion of artificial intelligence and gaming, as cars navigate the digital terrain using neural networks powered by a genetic algorithm.',
      toolsUsed: ['Rust','Bevy Game Engine','Neural Networks','Genetic Algorithms']
    
    },
    {
      name:"Discord Music Bot",
      deployedLink: "https://discord.com/api/oauth2/authorize?client_id=1195042358371291327&permissions=8&scope=bot",
      image: require('../../assets/bot (1).png'),
      fadeDuration:'1300',
      description:"The Discord Music Bot is a dynamic and user-friendly bot designed for Discord servers, developed using TypeScript. It enhances the music listening experience on Discord by allowing users to play music directly from YouTube and Spotify. This bot is a perfect integration for communities that enjoy sharing music and playlists.",
      toolsUsed: ['TypeScript','Discord API','Youtube API','Spotify API']
    },
    {
      name: "Hashpass",
      deployedLink: "https://hashpass.ranjansharma.info.np/",
      image: require('../../assets/hash.png'),
      fadeDuration:'1500',
      description:"HashPass is a cutting-edge web application designed to enhance cybersecurity measures by providing robust password hashing services. This tool is tailored for both individuals and organizations who prioritize the security of their digital accounts.",
      toolsUsed: ['Rust','HTML','CSS','JS','TypeScript']
    },
    {
      name:"Netflix-Clone",
      deployedLink: "https://netflix-ranjansharma.vercel.app/browse",
      image: require('../../assets/netflix.png'),
      fadeDuration:'1500',
      description:"like experience. This project showcases an intuitive interface for browsing and streaming a wide range of movies and TV shows.",
      toolsUsed: ['Node.js' , 'Express.js','HTML/CSS','MongoDB','Vercel']
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
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>Click on projects to learn more</h5>

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