import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import CreateUserScreen from './Screens/CreateUserScreen'
import ListUserScreen from './Screens/ListUserScreen'

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/createuser" element={<CreateUserScreen />} exact />
          <Route path="/listusers" element={<ListUserScreen />} exact />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
