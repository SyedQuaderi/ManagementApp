import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.scss';

function ConfirmDeleteModal(props) {
    const { show, handleClose, title, body, deleteWard } = props;
    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={deleteWard}>Ok</Button>
            </Modal.Footer>
        </Modal>
        );
}

export default React.memo(ConfirmDeleteModal);