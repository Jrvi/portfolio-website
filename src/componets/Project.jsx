import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Project = ({ project }) => {
  if (project.private) {
    return (
      <tr>
        <td>
          {project.name}
        </td>
        <td>{project.description}</td>
        <td>private</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </td>
        <td>{project.description}</td>
        <td>public</td>
      </tr>
    )
  }
}

Project.propTypes = {
  project: PropTypes.object,
}

export default Project