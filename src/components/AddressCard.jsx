import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function AddressCard({ address, onEdit, onDelete }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Função para abrir o modal de confirmação ao deletar
    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    // Função para confirmar a exclusão
    const handleConfirmDelete = () => {
        onDelete(address.id);
        setShowDeleteModal(false);
    };

    // Função para cancelar a exclusão
    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    };

    return (
        <>
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>{address.label}</Card.Title>
                            <Card.Text>
                                {address.name}<br />
                                {address.phone}<br />
                                {address.address}
                            </Card.Text>
                        </div>
                        <div className="d-flex align-items-start">
                            <Button variant="outline-primary" className="me-2" onClick={() => onEdit(address)}>Edit address</Button>
                            <Button variant="outline-danger" onClick={handleDeleteClick}>Delete address</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal de confirmação para deletar endereço */}
            <Modal show={showDeleteModal} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this address?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>Cancel</Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddressCard;
