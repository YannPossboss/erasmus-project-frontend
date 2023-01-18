import Login from './pages/Login';
import Register from './pages/Register';
import Impress from './pages/Impress';
import FrgtPass from './pages/FrgtPass';
import Country from './pages/Country';
import Landing from './pages/Landing';
import ProfileEdit from './pages/ProfileEdit';
import AdminPost from './pages/AdminPost';
import RecipeTempl from './pages/RecipeTempl';
import RegisterErr from './pages/RegisterErr';
import LoginErr from './pages/LoginErr'; 
import LoginErrTest from './pages/LoginErrTest';

import Invalidtxt from "./pages/pageComponent/Invalidtxt";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import './App.css';
import './w3.css';

function App() {
  

  return (

    <div>
      <Router>
        <Routes>
          <Route exact path = "/" element={<Landing/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/impress" element={<Impress/>}/>
          <Route path = "/frgtpass" element={<FrgtPass/>}/>
          <Route path = "/country" element={<Country/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/loginerr" element={<LoginErr/>}/>
          <Route path = "/logintest" element={<LoginErrTest/>}/>
          <Route path = "/editp" element={<ProfileEdit/>}/>
          <Route path = "/create" element={<AdminPost/>}/>
          <Route path = "/recipe" element={<RecipeTempl/>}/>
          <Route path = "/regierr" element={<RegisterErr/>}/>
          <Route path = "/inv" element={<Invalidtxt/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
