import React from 'react';
import './App.css';
import Header from './components/Header';
import MapSegment from './components/MapSegment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <MapSegment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
