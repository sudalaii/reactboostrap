import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home2 from "./Home2";
import LoginHome from "./LoginHome";
import User from "./User";




function App() {
  return (
    
    <div className="App">
      <NavBar />
       <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Home2" element={<Home2 />}></Route>
        <Route path="/Loginhome" element={<LoginHome />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/> 
    
      
    </div>
  );
}

export default App;
