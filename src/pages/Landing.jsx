import React from 'react';
import { Link } from 'react-router-dom';


const ImageWithText = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
          <Link to="/menu">
      <img src="/logo.svg" alt="Image" className="w-full" />
      </Link>
    </div>
  );
};

export default ImageWithText;
