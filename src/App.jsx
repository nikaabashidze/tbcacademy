import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './pages/main/main'
import Tbcit from './pages/tbcIt/tbcIt'
import Tbcxusaid from './pages/tbcUsaid/tbcUsaid'
import Risk from './pages/risk/risk'



function App() {
  return (
    <Routes>
      <Route path="/tbcacademy" element={<Main />} />
      <Route path="/it-academy" element={<Tbcit />} />
      <Route path="/usaid" element={<Tbcxusaid />} />
      <Route path="/risks-academy" element={<Risk />} />
    </Routes>
  );
}

export default App;
