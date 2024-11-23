// Loader.js
import React from 'react';
import { Bars } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
