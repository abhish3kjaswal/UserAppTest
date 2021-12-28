import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Table,
  Button,
  ButtonGroup,
  ModalTitle,
  ModalDialog,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveUser, UpdateUser } from '../Actions/userAction'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

Modal.setAppElement('#root')
const ListUserScreen = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [isCreated, setIsCreated] = useState(false)

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  //   console.log('LIST:', users)

  const resetHandler = () => {
    setName('')
    setAddress('')
    setAge('')
    setEmail('')
    console.log('RESET')
  }

  const editHandler = (id) => {
    const user = users.filter((u) => u.id == id)
    setId(user[0].id)
    setName(user[0].name)
    setAge(user[0].age)
    setAddress(user[0].address)
    setEmail(user[0].email)
    setModalIsOpen(true)
  }

  const editSubmitHandler = (e) => {
    e.preventDefault()
    const newUser = {
      id,
      name,
      age,
      address,
      email,
    }
    // console.log('EDIT SUBMIT:', newUser)
    dispatch(UpdateUser(newUser))
    setModalIsOpen(false)
  }
  const deleteHandler = (id) => {
    console.log('DELETE:', id)
    dispatch(RemoveUser(id))
  }

  return (
    <div>
      <Container>
        <Link to="/" className="btn btn-danger mt-5">
          Back
        </Link>

        <div className="mt-4">
          <h1>All Users</h1>
          {users.length === 0 ? (
            <h2>Create Users First</h2>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    {/* <td>{user.id}</td> */}
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.address}</td>
                    <td>
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          variant="secondary"
                          onClick={() => {
                            editHandler(user.id)
                          }}
                        >
                          <i className="fas fa-edit"></i>
                        </Button>
                        <Modal
                          className="modal1 px-2"
                          style={{
                            overlay: {
                              position: 'absolute',
                              top: '20px',
                              left: '30px',
                              right: '30px',
                              bottom: 0,
                              height: '700px',

                              marginRight: '10px',
                            },
                            content: {},
                          }}
                          isOpen={modalIsOpen}
                          ariaHideApp={false}
                          shouldCloseOnOverlayClick={false}
                          backdrop="static"
                          onRequestClose={() => {
                            setModalIsOpen(false)
                          }}
                        >
                          <Container>
                            <ModalHeader>
                              <ModalTitle>Edit User</ModalTitle>
                            </ModalHeader>
                            <Row className="justify-content-md-center mt-3 ">
                              <Col xs={12} md={6}>
                                <Form onSubmit={editSubmitHandler}>
                                  <FormGroup controlId="name">
                                    <FormLabel>Name*</FormLabel>
                                    <FormControl
                                      type="text"
                                      placeholder="Enter Name"
                                      value={name}
                                      required
                                      onChange={(e) => setName(e.target.value)}
                                    ></FormControl>
                                  </FormGroup>
                                  <FormGroup controlId="age">
                                    <FormLabel>Age</FormLabel>
                                    <FormControl
                                      type="number"
                                      placeholder="Enter Age"
                                      value={age}
                                      onChange={(e) =>
                                        setAge(
                                          e.target.value > 0
                                            ? e.target.value
                                            : '',
                                        )
                                      }
                                    ></FormControl>
                                  </FormGroup>
                                  <FormGroup controlId="email">
                                    <FormLabel>Email*</FormLabel>
                                    <FormControl
                                      type="email"
                                      placeholder="Enter Email"
                                      value={email}
                                      required
                                      onChange={(e) => setEmail(e.target.value)}
                                    ></FormControl>
                                  </FormGroup>
                                  <FormGroup controlId="address">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl
                                      type="text"
                                      placeholder="Enter Address"
                                      value={address}
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                    ></FormControl>
                                  </FormGroup>
                                  <Button
                                    type="submit"
                                    className="mt-4"
                                    variant="primary"
                                  >
                                    SUBMIT
                                  </Button>
                                  <Button
                                    onClick={resetHandler}
                                    className="mt-4 mx-3"
                                    variant="secondary"
                                  >
                                    RESET
                                  </Button>
                                </Form>
                              </Col>
                            </Row>
                            <Button
                              variant="primary"
                              className="mt-2"
                              onClick={() => {
                                setModalIsOpen(false)
                              }}
                            >
                              Close
                            </Button>
                          </Container>
                        </Modal>
                        <Button
                          variant="danger"
                          onClick={() => deleteHandler(user.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </Container>
    </div>
  )
}

export default ListUserScreen
