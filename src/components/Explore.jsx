import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore-container">
      {/* Hero Section */}
      <section className="hero-section text-center py-4">
        <div className="hero-top-banner">
          Do you know how much loan you can get? Get maximum with <span className="highlight">NoBroker</span> 
          <button className="btn btn-outline-light ml-2">Check Eligibility</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section container py-5">
        <div className="row text-center">
          {/* Service Card */}
          <div className="col-md-4 col-6 mb-4">
            <div className="service-card">
              <div className="icon-container">
                <img src="https://cdn-icons-gif.flaticon.com/13470/13470959.gif" alt="Builder Projects"
                style={{ width: '70px', height: '70px' }}  />
                {/* <span className="badge new-badge">New</span> */}
              </div>
              <p>Builder Projects</p>
            </div>
          </div>

          <div className="col-md-4 col-6 mb-4">
            <div className="service-card">
              <div className="icon-container">
                <img src="https://cdn-icons-png.flaticon.com/128/2139/2139142.png" alt="Sale Agreement" 
                style={{ width: '70px', height: '70px' }}/>
                <span className="badge new-badge">New</span>
              </div>
              <p>Sale Agreement</p>
            </div>
          </div>

          <div className="col-md-4 col-6 mb-4">
            <div className="service-card">
              <img src="https://cdn-icons-gif.flaticon.com/17905/17905132.gif" alt="Home Loan"
              style={{ width: '70px', height: '70px' }} />
              <p>Home Loan</p>
            </div>
          </div>

          {/* Add more service cards as needed */}
        </div>
      </section>

      {/* Why Use Section */}
      <section className="why-use-section container py-5 text-center">
        <h2>Why Our's OHM Project</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="info-card">
              <img src="https://cdn-icons-png.flaticon.com/128/6888/6888097.png" alt="Avoid Brokers" 
              style={{ width: '70px', height: '70px' }} />
              <h5>Avoid Brokers</h5>
              <p>We directly connect you to verified owners to save brokerage.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="info-card">
              <img src="https://cdn-icons-png.flaticon.com/128/1632/1632670.png" alt="Free Listing"
              style={{ width: '70px', height: '70px' }} />
              <h5>Free Listing</h5>
              <p>Easy listing process. Also using WhatsApp.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="info-card">
              <img src="https://cdn-icons-gif.flaticon.com/16678/16678081.gif" alt="Shortlist without Visit" 
              style={{ width: '70px', height: '70px' }} />
              <h5>Shortlist without Visit</h5>
              <p>Extensive information makes it easy to shortlist properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Assist Section */}
      <section className="business-assist-section container py-5 text-center">
        <h2>OHM projects Business Assist Plan For Builders</h2>
        <p>Get in touch with us to Sell or Rent Your Projects</p>
        <button className="btn btn-danger">Enquire Now</button>
        <p className="mt-3">For Builder Enquiries: +91 79889698xxx</p>
      </section>
    </div>
  );
};

export default Explore;
