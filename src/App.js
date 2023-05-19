import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import Page404 from './components/404/Page404';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
