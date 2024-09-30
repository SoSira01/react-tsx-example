import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import NoPage from './components/NoPage';
import GetStart from './components/GetStart';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/GetStart" element={<GetStart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>  );
}

export default App;
