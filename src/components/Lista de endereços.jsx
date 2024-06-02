import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './AddressList.css'; // Certifique-se de importar o CSS

export const AddressList = ({ addresses, onEdit, onDelete }) => {
    return (
        <ListGroup className="address-list">
            {addresses.map((address) => (
                <ListGroup.Item key={address.id} className="address-item">
                    <img src="path/to/address/image/2.jpg" alt="Address" className="address-image" />
                    <div className="address-details">
                        <h5>{address.label}</h5>
                        <p>{address.name}, {address.phone}, {address.address}</p>
                    </div>
                    <div className="address-actions">
                        <Button variant="primary" onClick={() => onEdit(address)} className="action-button">Edit address</Button>
                        <Button variant="danger" onClick={() => onDelete(address.id)} className="action-button">Delete address</Button>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
