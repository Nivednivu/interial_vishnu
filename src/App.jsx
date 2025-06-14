import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
// import { InteriorDesignProvider } from './InteriorDesignContext';
// import Header from './Header';
// import Home from './Home';
// import Services from './Services';
// import Contact from './Contact';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { InteriorDesignProvider } from './Components/Context/InteriorDesignContext';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <InteriorDesignProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/' element={<Header/>}/> */}

      </Routes>
      <Footer/>
    </InteriorDesignProvider>
  );
}

export default App;