import React, { useState, useEffect} from 'react';
import '../App.css'
import Menu from '../components/menu';
import About from '../components/about-modern'
import Services from '../components/services';
import ProjectsIntro from '../components/projectsintro';
import Contact from '../components/contact';
import Footer from '../components/footer'

//animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


function Home() {
  useEffect(() => {
    AOS.init({})
  })

  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show the button when scrolled down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='min-h-screen'  data-aos="zoom-in-down" data-aos-duration="3000">
        <About data-aos="fade-up" data-aos-duration="3000" />
      </div>
      <div
        class="bg-[url('../public/assets/road-lg.jpg')]
        w-full min-h-screen bg-cover bg-center p-4
        "
        alt="winding road"
        >
        <div className='flex flex-col py-6 mx-6
        lg:mx-64 md:mx-12'
        data-aos="fade-up" data-aos-duration="3000">
          <p className="flex text-2xl text-white font-bold text-left pb-4">Services</p>
          <Services />
        </div>
      </div>
      <div className='flex flex-col gap-8 py-6 mx-6
       lg:mx-64 md:mx-12'
       data-aos="fade-up" data-aos-duration="2000">
        <ProjectsIntro />
      </div>
      <div class="bg-[url('../public/assets/water-lg.jpg')]
        w-full bg-cover bg-center p-4
        "
        alt="aerial view of waves breaking"
        data-aos="fade-up" data-aos-duration="1200"
      >
        <Contact />
      </div>

      {/* footer */}
      <Footer />

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-12 right-12 transition"
            aria-label="Scroll to top"
          >
              <div class="animate-bounce bg-white dark:bg-orange-600 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="black">
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
          </button>
        )}

    </div>
  );
}

export default Home;
