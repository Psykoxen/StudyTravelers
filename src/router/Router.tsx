import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Detailed from "../pages/Detailed/detailed";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/detailed" element={<Detailed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
