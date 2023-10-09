import axios, { AxiosError } from 'axios'
const BASE_URL = import.meta.env.MODE === 'development' ? "/api" : import.meta.env.VITE_BASE_URL
const request = axios.create({
    baseURL: BASE_URL,
    timeout: 60000, //改成60s
})

async function http(params: Object) {
    try {

        const result = await request(params)
        if (result.status === 200) {
            if (result.data.err) {
                throw result.data.err
            }
            return result.data
        }
    }
    catch (error) {
        console.log(error);

    }
}
export default http