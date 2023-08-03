import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import background from './exp.png'
import SearchBar from './Components/searchBar'

const styles = {
  container: {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height:'100vh', width: '100vw',backgroundPosition: 'top left',  backgroundRepeat: 'no-repeat', marginLeft:-8,marginTop:-8}}>
    <Router >
      <div >    <img src={background} className="background" alt="Image"/>
      </div>

    <Navbar/>
    <SearchBar/>
    </Router>

    </div>
  );
}

export default App;
