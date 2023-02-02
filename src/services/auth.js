import axios from 'axios'

const client = axios.create({
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        timeout: 15000
    }
})