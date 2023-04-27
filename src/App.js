import "./pages/pageComponent/FontawesomeIcons"; 

import Login from './pages/Login';
import Register from './pages/Register';
import Impress from './pages/Impress';
import FrgtPass from './pages/FrgtPass';
import Navigation from './pages/Navigation';
import Landing from './pages/Landing';
import ProfileEdit from './pages/ProfileEdit';
import RecipeTempl from './pages/RecipeTempl';
import Create from "./pages/Create";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import './App.css';
import './w3.css';
import AdminPost from "./pages/AdminPost";

function App() {
  

  return (

    <div>
      <Router>
        <Routes>
          <Route exact path = "/" element={<Landing/>}/>
          <Route path = "/navigation" element={<Navigation/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/impress" element={<Impress/>}/>
          <Route path = "/frgtpass" element={<FrgtPass/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/editp" element={<ProfileEdit/>}/>
          <Route path = "/create" element={<Create/>}/>
          <Route path = "/recipe" element={<RecipeTempl/>}/>
          <Route path = "/admincreatecode" element={<AdminPost/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
