
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./components/Navbar/Nav.scss";
import "./layout/Reset/Reset.scss";

import About from "./pages/About/About";
import SamplePost from "./pages/SamplePost/SamplePost";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./layout/MainLayout.jsx/MainLayout";

function App() {
  

  return (
    <>


      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>  
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/SamplePost' element={<SamplePost />} />
          <Route path='/Contact' element={<Contact />} />
          </Route>
        

          

          
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
