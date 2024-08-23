import { Table, Navbar, Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import projectService from './services/projects'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Projects from './componets/Projects'
import ProjectView from './componets/ProjectView'
import Footer from './componets/Footer'
import CV from './componets/CV'
import Home from './componets/Home'

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projectService
    .getAll()
    .then(initialProjects => {
      setProjects(initialProjects)
    })
  }, [])
  
  const padding = {
    padding: 5
  }

  return (
    <div className='container'>
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/projects">projects</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/cv">CV</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectView projects={projects}/>} />
      </Routes>

      <Footer />
    </Router>
    </div>
  )
}

export default App
