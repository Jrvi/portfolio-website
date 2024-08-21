import { useParams } from "react-router-dom"
import commitService from "../services/commits"
import { useEffect, useState } from "react"
import Commit from "./Commit"
import { Table } from "react-bootstrap"

const ProjectView = ({ projects }) => {
  const [commits, setCommits] = useState([])
  const commitUrl = `https://api.github.com/repos/Jrvi/Jrvi/commits`

  useEffect(() => {
    commitService.getAll(commitUrl).then((initialCommits) => {
      setCommits(initialCommits)
    })
  }, [])

  const id = useParams().id
  const project = projects.find((p) => p.id === Number(id))
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>{project.name}</h1>
        </div>
        <div className="col"></div>
        <div className="col">{project.private.toString()}</div>
      </div>
      <div className="row">
        <div className="col">{project.description}</div>
      </div>
      <Table striped>
        <tbody>
          {commits.map((commit) => (
            <Commit commit={commit} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProjectView
