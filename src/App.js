import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data';
import Tours from './components/Tours';

function App() {
  const [tours,setTours]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id !== id);

    setTours(newTours);
  }

  if(tours.length==0){
    return(
      <div className='refresh'>
        <h2>No Tours left</h2>
        <button className='btnWhite' onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tour={tours} removeTours={removeTour}></Tours>
    </div>
  );
}

export default App;
