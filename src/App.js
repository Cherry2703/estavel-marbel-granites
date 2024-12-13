
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Already in use
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import this for JavaScript functionality


import Home from './components/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
