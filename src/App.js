import './App.css';
import Menu from './components/menu';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='mx-6'>
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
