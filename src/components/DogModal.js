import React from 'react'

const DogModal = (props) => {

  return (
    <>
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{props.dog.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>{props.dog.bio}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Email</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DogModal
