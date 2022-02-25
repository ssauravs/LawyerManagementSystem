import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Favourite, AddDetails, MainScreen } from "./Components/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/AddDetails" element={<AddDetails />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
