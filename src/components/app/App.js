import React, { useState } from 'react';
import Map from '../map/Map';
import Navigation from '../menu/Navbar';
import Table from '../table/Table';
import './App.css';


function App() {
  const [activeComponent, setActiveComponent] = useState("Map");
  function changeActiveComponent(component) {
    setActiveComponent(component);
  }
  const guid = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  return (
    <div className="app container">
      <header>
        <Navigation
          activeComponent={activeComponent}
          changeActiveComponent={changeActiveComponent} />
      </header>
      <main className="content">
        {activeComponent === "Map" &&
          <section className="section map-section">
            <Map genRandId={guid} />
          </section>
        }
        {activeComponent === "Table" &&
          <section className="section table-section">
            <Table />
          </section>
        }
      </main>
    </div>
  );
}

export default App;
