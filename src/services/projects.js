import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL_REPOS
let token = import.meta.env.VITE_TOKEN

const getAll = () => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }

    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

export default { getAll }
