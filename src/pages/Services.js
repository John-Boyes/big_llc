import '../App.css';
import Menu from '../components/menu';
import Services from '../components/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen App bg-blue-50">
      <Menu />
      <div
        class="bg-[url('../public/assets/road-lg.jpg')]
        min-h-screen w-full bg-cover bg-center p-4 
        "
        alt="3 person meeting at table"
        >
        <div className='py-6 mx-6 md:mx-12'>
          <p className="text-3xl text-white font-bold text-left pb-8 ">Boyes Innovations Services</p>
          <Services />
        </div>
      </div>
    </div>
  );
}

