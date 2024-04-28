import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChallengeBy from "./components/ChallengeBy";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
      <ChallengeBy />
    </>
  );
}

export default App;
