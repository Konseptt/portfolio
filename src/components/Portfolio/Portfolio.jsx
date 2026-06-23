import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Synapse Research",
      githubLink: "https://github.com/Konseptt/synapse-research",
      deployedLink: "https://github.com/Konseptt/synapse-research",
      image: require('../../assets/visualize.webp'),
      description: "PubMed search with instant evidence overviews and synthesis. For reading biomedical papers without getting lost in tabs.",
      fadeDuration: "500",
      toolsUsed: ['TypeScript', 'React', 'PubMed API', 'Next.js']
    },
    {
      name: "Faculty Ledger",
      githubLink: "https://github.com/Konseptt/faculty-ledger",
      deployedLink: "https://github.com/Konseptt/faculty-ledger",
      image: require('../../assets/hash.webp'),
      description: "Look up and compare professors using Rate My Professors data. Built for picking courses with eyes open.",
      fadeDuration: "600",
      toolsUsed: ['TypeScript', 'React', 'Data scraping']
    },
    {
      name: "LyangLang",
      githubLink: "https://github.com/Konseptt/LyangLang",
      deployedLink: "https://github.com/Konseptt/LyangLang",
      image: require('../../assets/rust.webp'),
      description: "A programming language and compiler with Nepali syntax, written in Rust. I built it to learn how languages and compilers work.",
      fadeDuration: "700",
      toolsUsed: ['Rust', 'Compiler design', 'Programming languages']
    },
    {
      name: "Clinical Trial Matcher",
      githubLink: "https://github.com/Konseptt/clinical-trial-matcher",
      deployedLink: "https://github.com/Konseptt/clinical-trial-matcher",
      image: require('../../assets/visualize.webp'),
      description: "Search international clinical trial registries from a patient's clinical details.",
      fadeDuration: "800",
      toolsUsed: ['TypeScript', 'Healthcare APIs', 'React']
    },
    {
      name: "Interview Question Predictor",
      githubLink: "https://github.com/Konseptt/interview-question-predictor",
      deployedLink: "https://github.com/Konseptt/interview-question-predictor",
      image: require('../../assets/hash.webp'),
      description: "Paste a job description, get 15 likely interview questions with answer frameworks. Next.js, streaming responses, no sign-up.",
      fadeDuration: "900",
      toolsUsed: ['Next.js', 'TypeScript', 'NVIDIA API']
    },
    {
      name: "brainrender-napari",
      githubLink: "https://github.com/Konseptt/brainrender-napari",
      deployedLink: "https://github.com/Konseptt/brainrender-napari",
      image: require('../../assets/shm.webp'),
      description: "A napari plugin to render BrainGlobe atlases and associated data as layers.",
      fadeDuration: "1000",
      toolsUsed: ['Python', 'napari', 'BrainGlobe']
    },
    {
      name: "HashPass",
      githubLink: "https://github.com/Konseptt/Hashpass",
      deployedLink: "https://hashpass.ranjansharma.info.np/",
      image: require('../../assets/hash.webp'),
      description: "Small web app that hashes passwords the way you'd want for real accounts.",
      fadeDuration: "1100",
      toolsUsed: ['Rust', 'TypeScript', 'Web']
    },
    {
      name: "Code to Image",
      githubLink: "https://github.com/Konseptt/Visualize-code",
      deployedLink: "https://codetoimage.ranjansharma.info.np/",
      image: require('../../assets/visualize.webp'),
      description: "Turn a code snippet into a shareable image with themes and export options.",
      fadeDuration: "1200",
      toolsUsed: ['React', 'JavaScript', 'CSS']
    },
    {
      name: "Rust AV Simulation",
      githubLink: "https://github.com/Konseptt/Rust-Autonomous-Vehicle-Simulation",
      deployedLink: "https://youtu.be/BzCkSsQmezE?si=9nDR2ga73ZizcMFH",
      image: require('../../assets/rust.webp'),
      description: "Self-driving cars in a small game world. Neural nets trained with a genetic algorithm, Rust + Bevy.",
      fadeDuration: "1300",
      toolsUsed: ['Rust', 'Bevy', 'Neural networks']
    },
    {
      name: "3D SHM Visualization",
      githubLink: "https://github.com/Konseptt/3D-Simple-Harmonic-Motion-Visualization",
      deployedLink: "https://shm.ranjansharma.info.np/",
      image: require('../../assets/shm.webp'),
      description: "Interactive 3D Simple Harmonic Motion demo with p5.js and WebGL.",
      fadeDuration: "1400",
      toolsUsed: ['p5.js', 'WebGL', 'JavaScript']
    },
    {
      name: "Streamline",
      githubLink: "https://github.com/konseptt/youtube-clone",
      deployedLink: "https://youtube.ranjansharma.info.np/",
      image: require('../../assets/youtube.webp'),
      description: "Minimal YouTube-style app with React and Material UI.",
      fadeDuration: "1500",
      toolsUsed: ['React', 'Material UI', 'Node.js', 'JWT']
    }
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id='portfolio'>
        <p className="section__subtitle" data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>Recent work</p>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>Portfolio</h2>
        <p className="section__subtitle" data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>Tap a project for details</p>

        <div className="container portfolio__container">

         {
          projects.map(({name, image, deployedLink, githubLink, description, toolsUsed, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} project screenshot`} width="400" height="200" loading="lazy" decoding="async" />
              </div>
              <h3
               className='portfolio__item-name'
               onClick={() => handleClick({name, image, deployedLink, githubLink, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                {deployedLink === githubLink ? (
                  <a className='btn btn-primary'
                    href={githubLink}
                    target='_blank'
                    rel="noreferrer"
                  >View on GitHub</a>
                ) : (
                  <>
                    <a className='btn'
                      href={githubLink}
                      target='_blank'
                      rel="noreferrer"
                    >GitHub</a>
                    <a className='btn btn-primary'
                      href={deployedLink}
                      target='_blank'
                      rel="noreferrer"
                    >Live demo</a>
                  </>
                )}
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
