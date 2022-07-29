import './App.css';
import Home from './Home';
import Login from './Login';
import NewAccount from './NewAccount';
import {Routes,Route} from "react-router-dom";


function App() { 
  
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/NewAccount" element={<NewAccount />} />
    </Routes>
  </div>
  );
}

export default App;
