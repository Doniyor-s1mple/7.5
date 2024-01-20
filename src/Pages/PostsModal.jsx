import { AvForm, AvField } from 'availity-reactstrap-validation'
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const PostsModal = ({ Active, Toggle , SubmitForm, currentItem}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <Modal isOpen={Active} toggle={Toggle}>
                        <ModalHeader className='bg-dark'>Add Posts</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='form' onValidSubmit={SubmitForm} model={currentItem?currentItem:{}}>
                                <AvField type='text' name='title' label='Title' required />
                                <AvField type='text' name='body' label='Body' required />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button color='outline-info btn-sm' form='form'>ok</Button>
                            <Button color='outline-warning btn-sm mx-2'>cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default PostsModal