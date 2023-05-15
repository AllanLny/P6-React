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
          <Route path="P6-React/" element={<Home />} />
          <Route path="P6-React/About" element={<About />} />
          <Route path="P6-React/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
