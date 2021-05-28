import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': 'a5zyq2na4qgu1ccuuo5omjathz1fbe'
    }
})

export default api