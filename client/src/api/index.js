import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4242/api',
})

export const insertBillet = payload => api.post(`/addBillet`, payload)
export const getAllBillets = () => api.get(`/billets`)
export const updateBilletByNumeroBillet = (NumeroBillet, payload) => api.put(`/billet/${NumeroBillet}`, payload)
export const deleteBilletByNumeroBillet = NumeroBillet => api.delete(`/billet/${NumeroBillet}`)
export const getBilletByNumeroBillet = NumeroBillet => api.get(`/billet/${NumeroBillet}`)
export const insertUser = payload => api.post(`/adduser`, payload)
export const loginConexion = payload => api.post(`/login`, payload)

const apis = {
    insertBillet,
    getAllBillets,
    updateBilletByNumeroBillet,
    deleteBilletByNumeroBillet,
    getBilletByNumeroBillet,
    loginConexion,
    insertUser,
}

export default apis