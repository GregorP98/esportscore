import Home from "./pages/home";
import GameInfo from "./pages/gameInfo";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="`${game.slug}`" element={<GameInfo />} /> */}
        <Route path="csgo" element={<GameInfo />} />
        <Route path="codmw" element={<GameInfo />} />
        <Route path="fifa" element={<GameInfo />} />
        <Route path="lol" element={<GameInfo />} />
        <Route path="ow" element={<GameInfo />} />
        <Route path="r6siege" element={<GameInfo />} />
        <Route path="rl" element={<GameInfo />} />
        <Route path="valorant" element={<GameInfo />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* create NoPage */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
