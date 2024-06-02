// src/components/AddressList.jsx
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const AddressList = ({ addresses = [], onEdit, onDelete }) => {
    return (
        <ListGroup>
            {addresses.map((address, index) => (
                <ListGroup.Item key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{address.label}</h5>
                            <p>{address.details}</p>
                        </div>
                        <div>
                            <Button variant="primary" onClick={() => onEdit(address)}>Edit address</Button>
                            <Button variant="danger" onClick={() => onDelete(address)}>Delete address</Button>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default AddressList;
