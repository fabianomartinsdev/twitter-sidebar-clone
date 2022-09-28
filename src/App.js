import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Header>
  );
}

export default App;
