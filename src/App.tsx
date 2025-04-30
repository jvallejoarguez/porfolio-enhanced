import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 flex flex-col">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Header />
        <main>
          <div id="projects" className="section-medium"><Projects /></div>
          <div id="experience" className="section-dark"><Experience /></div>
          <div id="technologies" className="section-medium"><Technologies /></div>
          <div id="contact" className="section-dark"><Contact /></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
