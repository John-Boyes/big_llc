import '../App.css';
import Menu from '../components/menu';
import Projects from '../components/projects';

export default function ProjectsPage() {
  return (
    <div className="App bg-blue-50 min-h-screen">
      <Menu />
      <div className='justify-center flex py-6'>
        <Projects />
      </div>
    </div>
  );
}
