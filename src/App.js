import './App.css';
import Menu from './components/menu';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
