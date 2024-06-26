import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import Navbar from '../src/components/Navbar.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route
          path="/"
          element={<Home/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
