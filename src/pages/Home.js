import '../App.css'
import Menu from '../components/menu';
import Services from '../components/services';
import About from '../components/about';
import ProjectsIntro from '../components/projectsintro';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="App bg-blue-50">
        <Menu />
      <div className='min-h-screen flex flex-col gap-8 py-6 mx-6 lg:mx-64 md:mx-12'>
        <Services />
        <ProjectsIntro />
      </div>
        <Contact />
    </div>
  );
}

export default Home;
