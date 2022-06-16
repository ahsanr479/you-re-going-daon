import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


export default function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('in modal')

  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        Vote
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you would like to vote 1 token on this project?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Yes, Vote
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}