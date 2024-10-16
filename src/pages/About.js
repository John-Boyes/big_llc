import '../App.css'
import Menu from '../components/menu';
import About from '../components/about-modern';
import Footer from '../components/footer';

export default function AboutPage() {
  return (
    <div className="App">
      <header className='w-full'>
        <Menu />
      </header>
      
      <div className='min-h-screen text-left'>
        <About />
      </div>
      <Footer />
    </div>
  );
}
