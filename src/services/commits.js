import axios from "axios"

let token = import.meta.env.VITE_TOKEN

const getAll = url => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }

    const request = axios.get(url, config)
    return request
        .then(response => response.data)
        .catch(error => console.log(error))
}

export default { getAll }