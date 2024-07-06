import '../App.css'
import Menu from '../components/menu';
import About from '../components/about';

export default function AboutPage() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='min-h-screen py-6 mx-6'>
        <About />
      </div>
    </div>
  );
}
