# arnaudballand-react-modal-library

arnaudballand-react-modal-library is a simple and reusable modal component for React

## Installation

The package can be installed via [npm](https://www.npmjs.com)

```bash
npm i arnaudballand-react-modal-library
```

## Configuration

#### 1. import

When you need the modal component, you have to import the component in your file

```js
import { Modal } from 'arnaudballand-react-modal-library'
```

#### 2. Required props

To run this modal, only two props are required

```js
isModalOpen, // Boolean
setIsModalOpen, // Function to update isModalOpen
```

## Example

Basic example

```js
import React, { useState } from 'react'
import { Modal } from 'arnaudballand-react-modal-library'

const Example = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <h2>Modal test</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </Modal>
    </>
  )
}
```

Add className to customize modal with css

```js
<Modal
  className="customModal"
  isModalOpen={isModalOpen}
  setIsModalOpen={setIsModalOpen}
>
  ...
</Modal>
```

```css
.customModal .reactModalLib__container {
  background-color: #c1121f;
}
```

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/) license.
