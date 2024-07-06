import '../App.css';
import Menu from '../components/menu';
import Services from '../components/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen App bg-blue-50">
      <Menu />
      <div className='py-6 mx-6 md:mx-12 lg:mx-64'>
        <Services />
      </div>
    </div>
  );
}

