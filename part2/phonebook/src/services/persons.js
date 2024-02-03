import axios from "axios"

const baseUrl = "http://localhost:3001/persons"


const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, newNumber, person) => {
    return axios.put(`${baseUrl}/${id}`, 
    {
        name: person.name,
        number: newNumber,
        id: person.id
    })
    .then((response) => {
        console.log(response.data)
    })
}

export default { 
    getAll: getAll,
    create: create,
    deletePerson, deletePerson,
    updateNumber, updateNumber
  }