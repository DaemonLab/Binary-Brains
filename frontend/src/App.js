import logo from './logo.svg';
import './App.css';
import './Components/Style.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Contests from './Components/Contests';
import Login from './Components/Login';
import Yourprofile from './Components/Yourprofile';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
    <div>      
      <Router>
      <div className="back">
      <Navbar2 />      
        <Routes>        
          <Route path="" element={<Homepage />} /> 
          <Route path="contests" element={<Contests />} />                 
          <Route path="login" element={<Login />} />                         
          <Route path="yourprofile" element={<Yourprofile />} />
          <Route path="signup" element={<SignUp />}/>          
          <Route path="*" />
        </Routes>                          
        </div>
      </Router>     
    </div>
    );
}

export default App;
