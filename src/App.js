import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'

function App() {

   return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
     </Routes>
     </BrowserRouter>
   );
 
}

export default App;
