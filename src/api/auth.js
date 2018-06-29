import axios from './init';

export default {
    fetchToken
}

async function fetchToken(email, password) {
    const response = await axios.post('/auth/login', {
        email,
        password
    })

    const [, token] = response.headers.authorization.split(' ')
    console.log(token)
    return token
}

