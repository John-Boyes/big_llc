import '../App.css';
import Menu from '../components/menu';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default function ProjectsPage() {
  return (
    <div className="App bg-blue-50 min-h-screen">
      <Menu />
      <div className='justify-center flex py-6'>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
