import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainScreen, BookSlot, ViewDetails } from "./Components/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/BookSlot" element={<BookSlot />} />
          <Route path="/ViewDetails" element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
