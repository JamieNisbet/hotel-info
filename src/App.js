import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./templates/Header";
import Welcome from "./pages/Welcome";
import Category from "./pages/Category";

import { golf, activities, hotel, restaurant, tel } from './data';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/hotel" element={<Category collection={hotel} tel={tel.office} />} />
      <Route path="/golf" element={<Category collection={golf} tel={tel.office}/>} />
      <Route path="/restaurant" element={<Category collection={restaurant} tel={tel.restaurant}/>} />
      <Route path="/activities" element={<Category collection={activities} tel={tel.office} />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
