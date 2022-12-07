import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Moviedetails from './components/Moviedetails/Moviedetails';
import Page from './components/Page404/Page';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='App'>
     <Router>
      <Header/>
      <div className='container'>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/movie/:imdbID' element={<Moviedetails/>} />
      <Route exact path='*' element={<Page/>}/>
      </Routes>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
