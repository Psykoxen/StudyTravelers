import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
