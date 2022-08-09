import logo from './logo.svg';
import './App.css';
import './Components/Style.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Contests from './Components/Contests';
import Login from './Components/Login';
import Yourprofile from './Components/Yourprofile';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
    <div>      
      
      <Router>
      <div className="back">
      <Navbar />      
        <Routes>        
          <Route path="" element={<Homepage />} /> 
          <Route path="contests" element={<Contests />} />                 
          <Route path="login" element={<Login />} />                         
          <Route path="yourprofile" element={<Yourprofile />} />
          <Route path="*" />          
        </Routes>           
        <Footer />       
        </div>
      </Router>     
    </div>
    );
}

export default App;
