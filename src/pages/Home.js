import '../App.css'
import Menu from '../components/menu';
import Services from '../components/services';
import ProjectsIntro from '../components/projectsintro';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div
        class="bg-[url('../public/assets/meeting-lg.jpg')]
        w-full bg-cover bg-center p-4
        "
        alt="3 person meeting at table"
        >
        <div className='flex flex-col py-6 mx-6
       lg:mx-64 md:mx-12'>
        <p className="flex text-xl font-bold text-left pb-4">Services</p>
        <Services />
      </div>
      </div>
      <div className='flex flex-col gap-8 py-6 mx-6
       lg:mx-64 md:mx-12'>
        <ProjectsIntro />
      </div>
      <div class="bg-[url('../public/assets/water-lg.jpg')]
        w-full bg-cover bg-center p-4
        "
        alt="aerial view of waves breaking"
      >
        <Contact />
      </div>
    </div>
  );
}

export default Home;
