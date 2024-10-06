import '../App.css';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App bg-blue-50">
      <Menu />
      <div className='py-6 mx-6 min-h-screen'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
