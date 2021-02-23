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
      <Modal show={show} className="modal-info">
        <Modal.Dialog className="p-0 m-0">
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title className="row d-flex justify-content-center">
              <div className="modal-title text-center">{dog.name}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row d-flex justify-content-center m-2">
              <img src={dog.picture} className="w-50 d-flex" alt=""/>
            </div>
            <p className="text-center">{dog.breed}</p>
            <p className="text-center">{dog.age} ◦ {dog.gender} ◦ {dog.size}</p>
            <p className="text-center">{neutered} ◦ {vaccinations}</p>
            <p className="mt-3 modal-bio">{dog.bio}</p>
            {/* <p>{vaccinations} | {neutered}</p> */}
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
