// App.js
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import MapSegment from './components/MapSegment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <MapSegment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;