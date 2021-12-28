import React from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HomeScreen = () => {
  return (
    <div className="HomeDiv">
      <Container>
        <Row>
          <Col>
            <h2>Welcome to HomeScreen</h2>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ButtonGroup aria-label="Basic example">
              <Link to="/createuser" className="btn btn-success ">
                Create User
              </Link>
              <Link to="/listusers" className="btn btn-secondary">
                List Users
              </Link>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
