import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons'
// 3.9
//const baseUrl = 'http://localhost:3001/api/persons'

// 3.10
//const baseUrl = 'https://cs-e4670.herokuapp.com/api/persons'

// 3.11, 3.13, 3.14
const baseUrl = '/api/persons'

// 3.13 
//const baseUrl = 'http://localhost:3001/api/persons'

// 3.11 
// $ npm run build

// 3.12
// $ node --inspect index.js

// 3.12
// $ npm install mongoose

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deletePerson: deletePerson,
}