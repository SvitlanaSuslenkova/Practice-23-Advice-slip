import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrialGot from "./pages/TrialGot";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="trial" element={<TrialGot />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
