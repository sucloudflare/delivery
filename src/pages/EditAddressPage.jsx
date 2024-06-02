import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import EditAddressForm from '../components/EditAddressForm';

function EditAddressPage() {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State para controlar a exibição do modal de confirmação

    // Função para lidar com o cancelamento da edição
    const handleCancel = () => {
        setShowConfirmationModal(true); // Exibir modal de confirmação ao cancelar
    };

    // Função para confirmar o cancelamento da edição
    const handleConfirmCancel = () => {
        setShowConfirmationModal(false); // Fechar modal de confirmação
        // Implemente aqui a lógica para redirecionar para a página anterior ou para onde desejar
    };

    // Função para lidar com o fechamento do modal de confirmação
    const handleCloseConfirmationModal = () => {
        setShowConfirmationModal(false); // Fechar modal de confirmação
    };

    // Função para lidar com o salvamento das alterações
    const handleSaveChanges = () => {
        // Implementar lógica para salvar as alterações
    };

    return (
        <Container className="mt-4">
            <Button variant="link" onClick={() => window.history.back()}>&larr; Back</Button>
            <h1>Edit shipping address</h1>
            <EditAddressForm />
            <div className="d-flex justify-content-end mt-3">
                <Button variant="outline-secondary" className="me-2" onClick={handleCancel}>Cancel</Button>
                <Button variant="primary" onClick={handleSaveChanges}>Save changes</Button>
            </div>
            {/* Modal de confirmação para cancelar */}
            <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Cancel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to cancel editing? Any unsaved changes will be lost.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmationModal}>No, keep editing</Button>
                    <Button variant="danger" onClick={handleConfirmCancel}>Yes, cancel</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default EditAddressPage;
