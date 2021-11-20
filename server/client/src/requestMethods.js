import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODcxMzUzYTRkOWQ0MTdiZTQwMmM5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQyNzMwMywiZXhwIjoxNjM2Njg2NTAzfQ.dkaAjj87KkIi1jBYID1cWIcv3xigntFOCK2CKdKfT9Y'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})