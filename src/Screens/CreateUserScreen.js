import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import { v4 } from 'uuid'
import { CreateUser } from '../Actions/userAction'

const CreateUserScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [isCreated, setIsCreated] = useState(false)

  const dispatch = useDispatch()

  //   id=v4()+Date.now()
  const submitHandler = (e) => {
    e.preventDefault()
    //Dispatch Register
    const user = {
      id: v4(),
      name,
      email,
      age,
      address,
    }
    dispatch(CreateUser(user))
    setName('')
    setAddress('')
    setAge('')
    setEmail('')
  }
  const resetHandler = () => {
    setName('')
    setAddress('')
    setAge('')
    setEmail('')
    console.log('RESET')
  }

  return (
    <Container>
      <Link to="/" className="btn btn-danger mt-5 ">
        Back
      </Link>
      <Row className="justify-content-md-center mt-3 ">
        <Col xs={12} md={6}>
          <h1>Create User</h1>

          <Form onSubmit={submitHandler}>
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
                  setAge(e.target.value > 0 ? e.target.value : '')
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
                onChange={(e) => setAddress(e.target.value)}
              ></FormControl>
            </FormGroup>
            <Button type="submit" className="mt-4" variant="primary">
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
    </Container>
  )
}

export default CreateUserScreen
