import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Not from './pages/Not';
import About from './pages/About';
import Form from './pages/Form';
import Formdaftar from './pages/Formdaftar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Form/>}></Route>
        <Route path='/daftar' element={<Formdaftar/>}></Route>
        <Route path='*' element={<Not/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
