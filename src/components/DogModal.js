import React from 'react'
import { Modal, Button} from 'react-bootstrap'

const DogModal = ({show, handleClose, handleShow, dog}) => {

  const email = `mailto:${dog.contact}`
  let vaccinations = '';
  let neutered = '';

  if (dog.vaccinations){
    vaccinations = 'Vaccinated'
  }

  if (dog.neutered && dog.gender === "Female"){
    neutered = 'Spayed'
  }
  if (dog.neutered && dog.gender === "Male"){
    neutered = 'Neutered'
  }

  

  return (
    <>
      <Modal show={show}>
        <Modal.Dialog className="p-0 m-0">
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>{dog.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{dog.bio}</p>
            <p>{vaccinations} | {neutered}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" href={email}>Email</Button>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  )
}

export default DogModal
