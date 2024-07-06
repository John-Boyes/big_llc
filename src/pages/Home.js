import '../App.css'
import Menu from '../components/menu';
import Services from '../components/services';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="App bg-blue-50">
        <Menu />
      <div className='mx-6'>
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
