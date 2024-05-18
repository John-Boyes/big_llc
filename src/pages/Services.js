import './App.css';
import Menu from './components/menu';
import Services from './components/services';
import Projects from './components/projects';

function App() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='mx-6'>
        <Services />
        <Projects />
      </div>
    </div>
  );
}

export default App;
