import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EditAddressForm.css'; // Importe o CSS

const EditAddressForm = ({ address, onSave, onCancel }) => {
    const [formData, setFormData] = useState(address);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <Form className="form-container" onSubmit={handleSubmit}>
            <img src="/1.jpg" alt="Address" className="form-img" /> {/* Adicionando a imagem */}
            <h2 className="form-title">Edit Address</h2>
            <Form.Group controlId="formAddressLabel">
                <Form.Label className="form-label">Address label</Form.Label>
                <Form.Control as="select" name="label" value={formData.label} onChange={handleChange}>
                    <option>Main House(Terra)</option>
                    <option>Office(Marte)</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPinPoint">
                <Form.Label className="form-label">Pin point</Form.Label>
                <div className="form-image-placeholder">
                    <Button variant="link">Change pin point</Button>
                </div>
            </Form.Group>

            <Form.Group controlId="formFullName">
                <Form.Label className="form-label">Full name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" />
            </Form.Group>

            <Form.Group controlId="formMobilePhone">
                <Form.Label className="form-label">Mobile phone</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter mobile phone" />
            </Form.Group>

            <Form.Group controlId="formAddressLine">
                <Form.Label className="form-label">Address line</Form.Label>
                <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter address" />
            </Form.Group>

            <Form.Group controlId="formCountry">
                <Form.Label className="form-label">Country</Form.Label>
                <Form.Control as="select" name="country" value={formData.country || ''} onChange={handleChange}>
                    <option>Macianos Unidos</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formState">
                <Form.Label className="form-label">State</Form.Label>
                <Form.Control as="select" name="state" value={formData.state || ''} onChange={handleChange}>
                    <option>Marte State</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCity">
                <Form.Label className="form-label">City</Form.Label>
                <Form.Control type="text" name="city" value={formData.city || ''} onChange={handleChange} placeholder="Enter city" />
            </Form.Group>

            <Form.Group controlId="formZipCode">
                <Form.Label className="form-label">Zip code</Form.Label>
                <Form.Control type="text" name="zipCode" value={formData.zipCode || ''} onChange={handleChange} placeholder="Enter zip code" />
            </Form.Group>

            <div className="form-actions">
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button variant="primary" type="submit">Save changes</Button>
            </div>
        </Form>
    );
};

export default EditAddressForm;
