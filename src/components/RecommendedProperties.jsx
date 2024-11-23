
import React, { useRef } from 'react';
import './RecommendedProperties.css';


const properties = [
  {
    id: 1,
    title: 'Semi furnished 2 BHK in gdr layout, rayasandra',
    rent: '₹25,000',
    deposit: '2 Months',
    area: '1,000 sq.ft',
    category: 'Girls, Family',
    image: 'property1.jpg',
    link: 'https://example.com/property1',
  },
  {
    id: 2,
    title: 'Semi furnished 2 BHK in bds layout, rk hegde nagar',
    rent: '₹23,000',
    deposit: '₹1,80,000',
    area: '1,000 sq.ft',
    category: 'Boys, Girls, Family',
    image: 'property2.jpg',
    tag: 'Managed by Owner',
    link: 'https://example.com/property1',
  },
  {
    id: 3,
    title: 'Semi furnished 1 BHK in bommasandra',
    rent: '₹15,000',
    deposit: '3 Months',
    area: '550 sq.ft',
    category: 'Boys, Girls, Family',
    image: 'property3.jpg',
    link: 'https://example.com/property1',
  },
  {
    id: 4,
    title: 'Semi furnished 2 BHK in omkara nagar, arakere',
    rent: '₹37,000',
    deposit: '₹1,25,000',
    area: '1,200 sq.ft',
    category: 'Boys, Girls, Family',
    image: 'property4.jpg',
    link: 'https://example.com/property1',
  },
  {
    id: 5,
    title: 'Semi furnished 2 BHK in omkara nagar, arakere',
    rent: '₹37,000',
    deposit: '₹1,25,000',
    area: '1,200 sq.ft',
    category: 'Boys, Girls, Family',
    image: 'property4.jpg',
    link: 'https://example.com/property1',
  },
  {
    id: 6,
    title: 'Semi furnished 2 BHK in omkara nagar, arakere',
    rent: '₹37,000',
    deposit: '₹1,25,000',
    area: '1,200 sq.ft',
    category: 'Boys, Girls, Family',
    image: 'property4.jpg',
    link: 'https://example.com/property1',
  }
];

const RecommendedProperties = () => {
  const propertySliderRef = useRef(null);

  const scrollLeft = () => {
    if (propertySliderRef.current) {
      propertySliderRef.current.scrollBy({
        top: 0,
        left: -250, // Adjust based on your card width
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (propertySliderRef.current) {
      propertySliderRef.current.scrollBy({
        top: 0,
        left: 250, // Adjust based on your card width
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="recommended-section">
      <h2>Recommended properties</h2>
      <div className="slider-container">
        <button className="arrow-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="property-slider" ref={propertySliderRef}>
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="image-container">
                <a href={property.link} target="_blank" rel="noopener noreferrer">
                  <img src={property.image} alt={property.title} />
                </a>
                {property.tag && <span className="tag">{property.tag}</span>}
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <p>{property.category}</p>
                <div className="property-details">
                  <span>{property.rent} Rent/month</span>
                  <span>{property.deposit} Security Deposit</span>
                  <span>{property.area} Area</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
};


export default RecommendedProperties;
