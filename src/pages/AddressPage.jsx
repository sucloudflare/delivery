import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button, Modal } from 'react-bootstrap';
import AddressList from '../components/AddressList';
import EditAddressForm from '../components/EditAddressForm';
import './AddressPage.css';

const initialAddresses = [
    {
        id: 1,
        label: 'Main House',
        name: 'John Doe',
        phone: '123-456-7890',
        address: '1234 Mars St, Mars City, Mars',
        image: 'https://via.placeholder.com/150' // URL da imagem da internet
    },
    {
        id: 2,
        label: 'Office',
        name: 'Jane Smith',
        phone: '098-765-4321',
        address: '5678 Venus Ave, Venus Town, Venus',
        image: 'https://via.placeholder.com/150' // URL da imagem da internet
    },
];

const AddressPage = () => {
    const [addresses, setAddresses] = useState(initialAddresses);
    const [editingAddress, setEditingAddress] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    const handleEdit = (address) => {
        setEditingAddress(address);
    };

    const handleDelete = (id) => {
        setSelectedAddressId(id);
        setShowDeleteModal(true);
    };

    const handleSave = (updatedAddress) => {
        setAddresses(addresses.map(address =>
            address.id === updatedAddress.id ? updatedAddress : address
        ));
        setEditingAddress(null);
    };

    const handleAddAddress = (newAddress) => {
        setAddresses([...addresses, newAddress]);
        setShowAddModal(false);
    };

    const handleDeleteConfirmation = () => {
        setAddresses(addresses.filter(address => address.id !== selectedAddressId));
        setShowDeleteModal(false);
    };

    const filteredAddresses = addresses.filter(address =>
        address.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="custom-container">
            <h1 className="custom-title">Address</h1>
            <Tab.Container defaultActiveKey="shipping">
                <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="shipping">Shipping address</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="billing">Billing address</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="custom-tab-content">
                    <Tab.Pane eventKey="shipping">
                        <Row>
                            <Col md={4}>
                                <input
                                    type="text"
                                    placeholder="Search the address here"
                                    className="form-control mb-3"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Button
                                    variant="outline-primary"
                                    className="w-100 mb-3"
                                    onClick={() => setShowAddModal(true)}
                                >
                                    Add address
                                </Button>
                                <AddressList addresses={filteredAddresses} onEdit={handleEdit} onDelete={handleDelete} />
                            </Col>
                            <Col md={8}>
                                {editingAddress && (
                                    <EditAddressForm
                                        address={editingAddress}
                                        onSave={handleSave}
                                        onCancel={() => setEditingAddress(null)}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

            {/* Add Address Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditAddressForm onSave={handleAddAddress} />
                </Modal.Body>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this address?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteConfirmation}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AddressPage;
