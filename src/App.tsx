import { useEffect } from "react";
import AppRouter from "./router/Router";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "StudyTravelers";
  }, []);
  return <AppRouter />;
}

export default App;
