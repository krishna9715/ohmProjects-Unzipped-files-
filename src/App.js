import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Loader from './components/Loader'; // Import the Loader component
import Searching from './components/searching';
import RecommendProperties from './components/RecommendedProperties';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Login from './components/Login'; // Assuming you have a login component
import About from './components/About';
import FAQ from './components/FAQ';
import Work from './components/work';
import Privacy from './components/privacy';
import Home from './components/Home';
import ListYourProperty from './components/ListYourProperty'; // Import the ListYourProperty modal

const App = () => {
  const [loading, setLoading] = useState(true); // State for loader
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Function to check login status
    const checkLoginStatus = async () => {
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      const userId = localStorage.getItem('userId'); // Retrieve userId

      if (storedLoginStatus && userId) {
        try {
          const response = await fetch('http://localhost:4000/api/auth/checkLoginStatus', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }), // Send userId to the backend
          });

          const data = await response.json();
          localStorage.setItem('isLoggedIn', JSON.stringify(data.isLoggedIn));

          if (!data.isLoggedIn) {
            // If user is not logged in, clear storage and redirect to login
            localStorage.removeItem('userId');
            localStorage.removeItem('isLoggedIn');
            setIsLoggedIn(false);
          } else {
            setIsLoggedIn(true);
          }
        } catch (error) {
          console.error('Error checking login status:', error);
        }
      } else {
        console.log('User is considered new or not logged in.');
        setIsLoggedIn(false);
      }

      // Stop the loader after the check is complete
      setLoading(false);
    };

    // Call the function when the component mounts
    checkLoginStatus();
  }, []);

  const handleOpenModal = () => setShowModal(true); // Show modal
  const handleCloseModal = () => setShowModal(false); // Close modal

  if (loading) {
    // Render the custom Loader while checking login status
    return <Loader />;
  }

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/work" element={<Work />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/list-your-property" element={<Searching />} />  {/* Default route */}
      <Route path="/list-your-property" element={<ListYourProperty />} />  {/* Route for List Your Property page */}
        {/* Add more routes as needed */}
      </Routes>

      <Footer />

      {/* Button to trigger the modal */}
      <button onClick={handleOpenModal} className="list-property-button">
        List Your Property
      </button>

      {/* Add the ListYourProperty modal */}
      <ListYourProperty show={showModal} handleClose={handleCloseModal} />
    </Router>
  );
};

export default App;
