import axios from 'axios'

const axiosConfiguration = () => axios.create({
    baseURL:"https://api.reallearning.sbtechzone.com/api/v1",
    timeout:30000
})

const axiosInstance = axiosConfiguration()

axiosInstance.interceptors.request.use(
    async config => {
        const { store } = await import('../index')
        const  state = store.getState()

        config.headers = {
            Accept: 'application/json',
            Authorization: `Bearer `
        }
        return config
    }
)

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    err => {
        console.log(err)
    }
)

export default axiosInstance