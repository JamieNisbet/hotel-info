import React from 'react';
import { menuSquares } from '../data/menuSquares.js';

const Menu = () => {
  return (
    <div className="flex flex-wrap h-screen">
      {menuSquares.map((square) => (
        <a href={square.link} key={square.id} className="w-1/4 relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${square.image})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold text-center">{square.title}</h2>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Menu;
