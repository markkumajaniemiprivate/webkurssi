import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = newObject => {
    console.log(newObject)
    const request = axios.delete(`${baseUrl}/${newObject.id}`)
    return request.then(response => response.data)
}

const update = (newObject, number) => {
    const request = axios.put(`${baseUrl}/${newObject.id}`, {...newObject, number: number})
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }
