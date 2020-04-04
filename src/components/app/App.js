import React from 'react';
import Map from '../map/Map';
import Navigation from '../menu/Navbar';
import './App.css';


function App() {
  return (
    <div className="app container">
        <header>
          <Navigation />
        </header>
      <main className="content">
        <section className="section map-section">
          <Map />
        </section>
      </main>
    </div>
  );
}

export default App;
