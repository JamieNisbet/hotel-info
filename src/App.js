import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./templates/Header";
import Welcome from "./pages/Welcome";
import Hotel from "./pages/Hotel";
import Golf from "./pages/Golf";
import Restaurant from "./pages/Restaurant";
import Activities from "./pages/Activities";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/golf" element={<Golf/>} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/activities" element={<Activities />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
