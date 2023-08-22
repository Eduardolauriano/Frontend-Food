import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://food-api-5ax6.onrender.com'
})