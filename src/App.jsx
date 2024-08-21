import { Table, Navbar, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import projectService from './services/projects'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Project from './componets/Project'
import ProjectView from './componets/ProjectView'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>Kuka olen</h2>
      <p>Hei, Olen Juho Järvi ja olen Jyväskylän yliopiston Teknologiajohtamisen opiskelija.</p>
    </div>
  )
}

const Projects = ({ projects }) => {
  return (
    <div>
      <h1>Projects</h1>
      <Table striped>
        <tbody>
          {projects.map(project =>
            <Project key={project.id} project={project}/>
          )}
        </tbody>
      </Table>
    </div>
  )
}

const CV = () => {
  return (
    <div>
      <h1>CV</h1>
    </div>
  )
}

const Footer = () => {
  return (
      <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>&copy; 2024 Juho Järvi. Kaikki oikeudet pidätetään.</small>
        </div>
      </footer>
  )
}

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

Projects.propTypes = {
  projects: PropTypes.array
}

export default App
