import Project from './Project'
import { Table } from 'react-bootstrap'

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

export default Projects