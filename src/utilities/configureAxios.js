import axios from 'axios'

const axiosConfiguration = () => axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1",
    timeout:30000
})

const axiosInstance = axiosConfiguration()

axiosInstance.interceptors.request.use(
    async config => {
        const { store } = await import('../index')
        const  state = store.getState()

        config.headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${state.user.token}`
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