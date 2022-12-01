import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const AddProduct = (props) => {
  console.log(props)
  return (
    <div>
       <Modal isOpen={props.isOpen}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          {props.post}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            Do Something
          </Button>
          <Button onClick={props.hide} color="secondary">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AddProduct
