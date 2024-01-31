import './App.css';
import { Userlist } from './Component/Userlist';
import  Navbar1  from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/Register';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/users" element={<Userlist/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
