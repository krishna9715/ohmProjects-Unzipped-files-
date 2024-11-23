import React, { useEffect, useState } from 'react';
import './searching.css';
import Progress from './Progress/Progress';
import { useNavigate } from 'react-router-dom';

function Searching() {
  const [fadeIn, setFadeIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [searchCategory, setSearchCategory] = useState('Buy'); // Track selected category

  // Array of city names and their images
  const cities = [
    { name: 'Chennai', img: '/images/chennai.jpg' },
    { name: 'Bangalore', img: '/images/bangalore.jpg' },
    { name: 'Coimbatore', img: '/images/coimbatore.jpg' },
    { name: 'Salem', img: '/images/salem.jpg' },
    { name: 'Tiruchirappalli', img: '/images/tiruchirappalli.jpg' },
  ];

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    setShowModal(false); // Close the modal after selecting a city
  };

  const handleCategoryChange = (category) => {
    setSearchCategory(category); // Update search category (Buy, Rent, or Commercial)
    setSelectedCity(''); // Clear the selected city when category changes
  };

    const navigate = useNavigate();  // Hook to navigate to other pages
  
    // Function to handle button click
    const handlePostAdClick = () => {
      navigate('/list-your-property');  // Navigate to the Post Ad page
    };

  return (
    <>
      <div className={`searching-wrapper ${fadeIn ? 'fade-in' : ''}`}>
        {/* Hero Section */}
        <section className="intro-section text-center py-5">
          <h1 className="mb-3 text-light">World's Largest NoBrokerage Property Site</h1>
          <div className="feature-badges my-3">
            <span className="badge bg-warning text-dark me-2 pulse-badge">
              <i className="bi bi-house-door"></i> Home Interiors
            </span>
            <span className="badge bg-warning text-dark pulse-badge">
              <i className="bi bi-shield-check"></i> 45-Days Guarantee
            </span>
          </div>
        </section>

        {/* Search Section */}
        <section className="property-search p-4 shadow-sm rounded mx-auto fade-in-up" style={{ maxWidth: "900px" }}>
          <div className="d-flex justify-content-between mb-3 search-buttons">
            <button
              className={`btn ${searchCategory === 'Buy' ? 'btn-One' : 'btn-light'} button-hover flex-grow-1`}
              onClick={() => handleCategoryChange('Buy')}
            >
              Buy
            </button>
            <button
              className={`btn ${searchCategory === 'Rent' ? 'btn-One' : 'btn-light'} button-hover flex-grow-1`}
              onClick={() => handleCategoryChange('Rent')}
            >
              Rent
            </button>
            <button
              className={`btn ${searchCategory === 'Commercial' ? 'btn-One' : 'btn-light'} button-hover flex-grow-1`}
              onClick={() => handleCategoryChange('Commercial')}
            >
              Commercial
            </button>
          </div>

          {/* Search Form */}
          <div className="row mb-3 gx-2">
            <div className="col-lg-4 col-md-6 col-12 mb-2">
              <div onClick={() => setShowModal(true)} className="form-select" style={{ cursor: 'pointer' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={selectedCity || 'Select a city'}
                  readOnly
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12 mb-2">
              <input type="text" className="form-control" placeholder="Search up to 3 localities or landmarks" />
            </div>
          </div>

          {/* Property Options (can be customized per category) */}
          <div className="row mb-3 gx-2">
            <div className="col-6 col-sm-3 mb-2">
              <div className="form-check">
                <input type="radio" name="propertyType" className="form-check-input" id="fullHouse" />
                <label className="form-check-label" htmlFor="fullHouse">Full House</label>
              </div>
            </div>
            <div className="col-6 col-sm-3 mb-2">
              <div className="form-check">
                <input type="radio" name="propertyType" className="form-check-input" id="landPlot" />
                <label className="form-check-label" htmlFor="landPlot">Land/Plot</label>
              </div>
            </div>
            <div className="col-6 col-sm-3 mb-2">
              <select className="form-select">
                <option>BHK Type</option>
              </select>
            </div>
            <div className="col-6 col-sm-3 mb-2">
              <select className="form-select">
                <option>Property Status</option>
              </select>
            </div>
          </div>

          {/* Builder Projects Checkbox & Search Button */}
          <div className="row mb-3 gx-2">
            <div className="col-6 col-sm-4 mb-2 d-flex align-items-center">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="newBuilder" />
                <label className="form-check-label" htmlFor="newBuilder">New Builder Projects</label>
              </div>
            </div>
            <div className="col-6 col-sm-8 mb-2">
              <button className="btn btn-One text-light w-100 button-hover">Search</button>
            </div>
          </div>
        </section>

        {/* Property Owner Section */}
        <section className="text-center my-5">
          <h6>Are you a Property Owner?</h6>
          <button className="btn btn-success button-hover" onClick={handlePostAdClick}>Post Free Property Ad</button>
        </section>
      </div>

      {/* Modal for city image gallery */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Select a City</h3>
            <div className="modal-gallery">
              {cities.map((city, index) => (
                <div key={index} className="city-item" onClick={() => handleCitySelect(city.name)}>
                  <img src={city.img} alt={city.name} className="city-image" />
                  <p>{city.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Progress />
    </>
  );
}

export default Searching;
