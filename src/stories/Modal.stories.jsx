import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '../components/Modal'
import './styles.css'

const stories = storiesOf('Modal Test', module)

stories.add('Default Modal', () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <h2>Modal test</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
          dignissim nulla. Donec a lorem nec erat varius interdum. Curabitur nec
          arcu luctus, lacinia magna et, laoreet neque. Nullam fringilla ante ac
          nibh mattis pretium. Nulla nec dictum urna, nec molestie nisi. Morbi
          ultrices, neque in dapibus finibus, odio ipsum pellentesque neque,
          eget elementum dui augue lobortis elit. Sed ut leo laoreet, mollis
          odio in, hendrerit neque. Sed non odio elit. Vestibulum molestie a
          ante sit amet posuere. In quis nulla vulputate, fermentum felis nec,
          lobortis enim. Vestibulum ultricies tempor nunc nec dignissim. Etiam
          vel tortor auctor, sollicitudin lacus et, imperdiet diam.
        </p>
      </Modal>
    </>
  )
})

stories.add('Custom Modal', () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal
        className="customModal"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <div className="customModal__header">
          <h2>Modal test</h2>
        </div>
        <div className="customModal__body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            dignissim nulla. Donec a lorem nec erat varius interdum. Curabitur
            nec arcu luctus, lacinia magna et, laoreet neque. Nullam fringilla
            ante ac nibh mattis pretium. Nulla nec dictum urna, nec molestie
            nisi. Morbi ultrices, neque in dapibus finibus, odio ipsum
            pellentesque neque, eget elementum dui augue lobortis elit. Sed ut
            leo laoreet, mollis odio in, hendrerit neque. Sed non odio elit.
            Vestibulum molestie a ante sit amet posuere. In quis nulla
            vulputate, fermentum felis nec, lobortis enim. Vestibulum ultricies
            tempor nunc nec dignissim. Etiam vel tortor auctor, sollicitudin
            lacus et, imperdiet diam.
          </p>
        </div>
      </Modal>
    </>
  )
})
