import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ListYourProperty.css'; // Ensure to import the CSS file

const ListYourProperty = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    propertyName: '',
    location: '',
    description: '',
    propertyType: '', 
    bedrooms: '',
    bathrooms: '',
    price: '',
    squareFootage: '',
    availability: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <Modal show={show} onHide={handleClose} className="list-property-modal">
      <Modal.Header closeButton>
        <h5 className="modal-title">List Your Property</h5>
        <Button variant="link" className="close-btn" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <p className="form-description">Fill out the form below to list your property with us.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPropertyName">
            <Form.Label>Property Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter property name"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter property description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPropertyType">
            <Form.Label>Property Type</Form.Label>
            <Form.Control
              as="select"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
            </Form.Control>
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="formBedrooms" className="col-6">
              <Form.Label>Bedrooms</Form.Label>
              <Form.Control
                type="number"
                min="1"
                placeholder="Number of bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBathrooms" className="col-6">
              <Form.Label>Bathrooms</Form.Label>
              <Form.Control
                type="number"
                min="1"
                placeholder="Number of bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formPrice" className="col-6">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price ($)"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formSquareFootage" className="col-6">
              <Form.Label>Square Footage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Square footage"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formAvailability">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              as="select"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            >
              <option value="">Select availability</option>
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formImages">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control
              type="file"
              multiple
              name="images"
              onChange={handleFileChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ListYourProperty;
