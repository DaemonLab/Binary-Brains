import logo from './logo.svg';
import './App.css';
import './Components/Style.css';
import Homepage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Contests from './Components/Contests';
import Login from './Components/Login';
import Yourprofile from './Components/Yourprofile';
import SignUp from './Components/SignUp';
import Viewprizes from './Components/Viewprizes';
import FAQs from './Components/FAQs';
import Dailyprob from './Components/Dailyprob';
import Confirmation from './Components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
          <Route path="signup" element={<SignUp />}/>   
          <Route path="dailyprob" element={<Dailyprob />}/>        
          <Route path="about" element={<AboutUs />}/> 
          <Route path="faq" element={<FAQs />}/>
          <Route path="viewprize" element={<Viewprizes />}/>
          <Route path="confirmation/:code" element={<Confirmation />}/>
          <Route path="*" />
        </Routes>                          
        </div>
      </Router>     
    </div>
    );
}

export default App;
