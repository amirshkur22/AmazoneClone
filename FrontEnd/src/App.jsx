import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PageRouter from "./PageRouter";

function App() {
  return (
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  );
}

export default App;
