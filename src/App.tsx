import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import NoPage from './components/NoPage';
import GetStart from './components/GetStart';
import ReactHook from './components/ReactHook';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/GetStart" element={<GetStart />} />
        <Route path="/ReactHook" element={<ReactHook />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>  );
}

export default App;
