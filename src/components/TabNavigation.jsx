import React from 'react';
import { Nav, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function TabNavigation() {
    const history = useHistory();
    const [showAddModal, setShowAddModal] = useState(false);

    // Função para navegar para a página de adicionar endereço
    const navigateToAddAddress = () => {
        history.push('/add-address');
    };

    // Função para exibir o modal de adicionar endereço
    const showAddAddressModal = () => {
        setShowAddModal(true);
    };

    // Função para fechar o modal de adicionar endereço
    const closeAddAddressModal = () => {
        setShowAddModal(false);
    };

    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/shipping">
                <Nav.Item>
                    <Nav.Link href="/shipping">Shipping address</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/billing">Billing address</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="primary" onClick={showAddAddressModal}>Add Address</Button>
                </Nav.Item>
            </Nav>

            {/* Modal para adicionar endereço */}
            <Modal show={showAddModal} onHide={closeAddAddressModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Componente ou formulário para adicionar endereço */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAddAddressModal}>Cancel</Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TabNavigation;
