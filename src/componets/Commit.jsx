import { Link } from "react-router-dom"

const Commit = commit => {
    console.log(commit.commit)
    return (
        <tr>
            <td>
                <Link to={commit.commit.html_url}>{commit.commit.commit.author.name}</Link>
            </td>
            <td>
                {commit.commit.commit.message}
            </td>
            <td>
            {commit.commit.commit.author.date}
            </td>
        </tr>
    )
}

export default Commit