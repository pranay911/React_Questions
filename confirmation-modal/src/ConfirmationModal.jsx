import React, { useState } from 'react'

const ConfirmationModal = () => {
  // `showModal` controls whether the modal is visible.
  // Initially false -> modal hidden.
  const [showModal, setShowModal] = useState(false)

  // `message` holds a short status message after user action.
  // Initially empty string -> nothing shown.
  const [message, setMessage] = useState("")

  // Called when user clicks "Confirm".
  // Sets a status message and hides the modal.
  const handleConfirm = () => {
    setMessage("Confirmed")
    setShowModal(false)
  }

  // Called when user clicks "Cancel".
  // Sets a status message and hides the modal.
  const handleCancel = () => {
    setMessage("Cancelled")
    setShowModal(false)
  }

  return (
    <div className="modal-container">
      {/* Button to open the modal. Sets isActive true so modal renders */}
      <button className="open-modal-btn" data-testid="open-modal-button" onClick={() => setShowModal(true)} >Open Confirmation Modal</button>

      {/* Render the backdrop + modal only when isActive is true */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box" data-testid="confirmation-modal">
            <h2 className="modal-title" data-testid="modal-title">Confirm Action</h2>

            {/* Informational text for the user */}
            <p className="modal-message" data-testid="modal-message">Are you sure you want to proceed?</p>

            {/* Action buttons inside the modal */}
            <div className="modal-buttons">
              {/* Confirm triggers handleConfirm */}
              <button className="confirm-btn" data-testid="confirm-button"  onClick={handleConfirm}>
                Confirm
              </button>

              {/* Cancel triggers handleCancel */}
              <button className="cancel-btn" data-testid="cancel-button"  onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show the result message if message is non-empty */}
      {message && <div className="action-status" data-testid="action-status">{message}</div>}
    </div>
  )
}

export default ConfirmationModal
