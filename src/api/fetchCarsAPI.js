import axios from './init';

async function fetchCars(token) {
    const response = await axios.get('/cars', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const cars = response.data
    return cars
}

export default {
    fetchCars,
}