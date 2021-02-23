import React from 'react';
import Filter from './Filter';
import { Modal, Button} from 'react-bootstrap'

export default function ModalFilter({show, handleClose, handleShow}) {


  return (
    <>
        <Modal show={show} className="modal-info">
        <Modal.Dialog className="p-0 m-0">
          <Modal.Body>
              <Filter close={handleClose}/>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
