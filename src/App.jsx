import React,{useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import Loader from './components/Loader/Loader';


const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [activeNav,setActiveNav] = useState('#')

  useEffect(() => {
    const hideLoader = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }

    AOS.init({
      duration: 800,
      disable: function () {
        return window.innerWidth < 1024;
      }
    });

    const section = document.querySelectorAll('section');

    const onScroll = () => {
      if (window.scrollY < 50) {
        setActiveNav('#');
        return;
      }

      section.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveNav(`#${id}`);
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('load', hideLoader);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
   isLoading ? <Loader/> : (
    <main>
      <Header/>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
      <About/>
      <Experience/>
      <Services />
      <Portfolio/>
      <Review/>
      <Contact/>
      <Footer/>
    </main>
   )
  )
}

export default App
