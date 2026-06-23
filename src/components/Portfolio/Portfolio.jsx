import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "LyangLang",
      githubLink: "https://github.com/Konseptt/LyangLang",
      deployedLink: "https://github.com/Konseptt/LyangLang",
      image: require('../../assets/rust.webp'),
      description: "LyangLang is a programming language and compiler with Nepali-language syntax, written in Rust. Ranjan Sharma built it to explore compiler design, language semantics, and systems programming.",
      fadeDuration: "500",
      toolsUsed: ['Rust', 'Compiler Design', 'Programming Languages', 'LLVM']
    },
    {
      name: "Synapse Research",
      githubLink: "https://github.com/Konseptt/synapse-research",
      deployedLink: "https://github.com/Konseptt/synapse-research",
      image: require('../../assets/visualize.webp'),
      description: "Synapse Research is a biomedical research intelligence tool that searches PubMed and returns instant evidence overviews, helping researchers and clinicians find relevant literature faster.",
      fadeDuration: "600",
      toolsUsed: ['TypeScript', 'AI', 'PubMed API', 'React']
    },
    {
      name: "Clinical Trial Matcher",
      githubLink: "https://github.com/Konseptt/clinical-trial-matcher",
      deployedLink: "https://github.com/Konseptt/clinical-trial-matcher",
      image: require('../../assets/hash.webp'),
      description: "Clinical Trial Matcher searches international clinical-trial registries using a patient's clinical details, connecting healthcare workflows to open trial data.",
      fadeDuration: "700",
      toolsUsed: ['TypeScript', 'Healthcare APIs', 'React', 'AI']
    },
    {
      name: "Interview Question Predictor",
      githubLink: "https://github.com/Konseptt/interview-question-predictor",
      deployedLink: "https://github.com/Konseptt/interview-question-predictor",
      image: require('../../assets/visualize.webp'),
      description: "Paste a job description and get the 15 most likely interview questions. Built by Ranjan Sharma as an AI-powered career prep tool.",
      fadeDuration: "800",
      toolsUsed: ['TypeScript', 'LLMs', 'React', 'NLP']
    },
    {
      name: "Rust Autonomous Vehicle Simulation",
      githubLink: "https://github.com/Konseptt/Rust-Autonomous-Vehicle-Simulation",
      deployedLink: "https://youtu.be/BzCkSsQmezE?si=9nDR2ga73ZizcMFH",
      image: require('../../assets/rust.webp'),
      description: "Self-driving cars navigate a virtual world using neural networks trained by a genetic algorithm, built in Rust with the Bevy game engine.",
      fadeDuration: "900",
      toolsUsed: ['Rust', 'Bevy', 'Neural Networks', 'Genetic Algorithms']
    },
    {
      name: "HashPass",
      githubLink: "https://github.com/Konseptt/Hashpass",
      deployedLink: "https://hashpass.ranjansharma.info.np/",
      image: require('../../assets/hash.webp'),
      description: "HashPass is a cybersecurity web app that generates secure passwords using a hashing algorithm, built for individuals and teams who prioritize account security.",
      fadeDuration: "1000",
      toolsUsed: ['Rust', 'TypeScript', 'HTML', 'CSS', 'Security']
    },
    {
      name: "Code to Image",
      githubLink: "https://github.com/Konseptt/Visualize-code",
      deployedLink: "https://codetoimage.ranjansharma.info.np/",
      image: require('../../assets/visualize.webp'),
      description: "Code to Image converts code snippets into polished, shareable images with themes and export options for social media, blogs, and presentations.",
      fadeDuration: "1100",
      toolsUsed: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: "3D SHM Visualization",
      githubLink: "https://github.com/Konseptt/3D-Simple-Harmonic-Motion-Visualization",
      deployedLink: "https://shm.ranjansharma.info.np/",
      image: require('../../assets/shm.webp'),
      description: "An interactive 3D visualization tool for Simple Harmonic Motion physics, built with p5.js and WebGL to make complex concepts tangible.",
      fadeDuration: "1200",
      toolsUsed: ['p5.js', 'WebGL', 'JavaScript', 'HTML', 'CSS']
    },
    {
      name: "Streamline YouTube Clone",
      githubLink: "https://github.com/konseptt/youtube-clone",
      deployedLink: "https://youtube.ranjansharma.info.np/",
      image: require('../../assets/youtube.webp'),
      description: "Streamline is a minimalist YouTube clone built with React and Material UI, focused on clean video browsing and a streamlined streaming experience.",
      fadeDuration: "1300",
      toolsUsed: ['React', 'Material UI', 'Node.js', 'JWT', 'API']
    },
    {
      name: "Netflix Clone",
      githubLink: "https://github.com/konseptt/netflix-clone",
      deployedLink: "https://netflix-ranjansharma.vercel.app/browse",
      image: require('../../assets/netflix.webp'),
      fadeDuration: "1400",
      description: "A Netflix-like streaming interface for browsing movies and TV shows, built with Node.js, Express, and MongoDB.",
      toolsUsed: ['Node.js', 'Express.js', 'MongoDB', 'HTML/CSS', 'Vercel']
    }
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>Portfolio by Ranjan Sharma</h2>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>Click on projects to learn more</h5>

        <div className="container portfolio__container">

         {
          projects.map(({name, image, deployedLink, githubLink, description, toolsUsed, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} project screenshot by Ranjan Sharma`} />
              </div>
              <h3
               className='portfolio__item-name'
               onClick={() => handleClick({name, image, deployedLink, githubLink, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn'
                  href={githubLink}
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
