import '../App.css';
import Menu from '../components/menu';
import Projects from '../components/projects';

export default function ProjectsPage() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='flex py-6 mx-6 md:mx-12 lg:mx-64'>
        <Projects />
      </div>
    </div>
  );
}
