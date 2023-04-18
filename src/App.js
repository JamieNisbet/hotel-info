import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./templates/Header";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
