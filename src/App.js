import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./index.css";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
