import React from 'react'
import './modal.css'

export const Modal = ({ className = '', isOpen, setIsModalOpen, children }) => {
  if (!isOpen) return null

  const closeModal = (e) => {
    e.preventDefault()
    setIsModalOpen(false)
  }

  return (
    <div
      className={`${className} reactModalLib`}
      tabIndex={-1}
      role="dialog"
      onClick={(e) => closeModal(e)}
    >
      <div
        className="reactModalLib__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="reactModalLib__btnClose"
          onClick={(e) => closeModal(e)}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" />
          </svg>
        </button>
        <div className="reactModalLib__content">{children}</div>
      </div>
    </div>
  )
}
