import '../App.css';
import Menu from '../components/menu';
import Services from '../components/services';

export default function ServicesPage() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='mx-6'>
        <Services />
      </div>
    </div>
  );
}

