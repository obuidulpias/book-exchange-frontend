//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

//Pages
import Login from './Pages/Login';
import Contact from './Pages/Contact';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
        <Header/>
        <Routes>     
            <Route path="/" element={<MainContent />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
    // <BrowserRouter>
    //     <Header/>
    //     <MainContent/>
    //     <Footer/>
    // </BrowserRouter>
  )
}

export default App
