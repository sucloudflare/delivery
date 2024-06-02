import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './AddressList.css';
import addressImage from './img/1.jpg'; // Importando a imagem

const AddressList = ({ addresses, onEdit, onDelete }) => {
    return (
        <ListGroup>
            {addresses.map((address) => (
                <ListGroup.Item key={address.id} className="address-item d-flex align-items-center">
                    <img src={address.image} alt="Address" className="address-image me-3" /> {/* Exibindo a imagem */}
                    <div className="address-details flex-grow-1">
                        <h5 className="text-capitalize">{address.label}</h5>
                        <p className="mb-1 text-capitalize">{address.name}</p>
                        <p className="mb-1">{address.phone}</p>
                        <p className="mb-0 text-capitalize">{address.address}</p>
                    </div>
                    <div className="address-actions">
                        <Button variant="primary" onClick={() => onEdit(address)} className="me-2">Edit address</Button>
                        <Button variant="danger" onClick={() => onDelete(address.id)}>Delete address</Button>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default AddressList;
