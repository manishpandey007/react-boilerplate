import axiosInstance from '../utilities/configureAxios'

export async function login(mobile) {
    return axiosInstance.post('/login',{mobile})
    .then(() => true)
    .catch(error => {
        console.log(error)
    })
}

export async function verfiOtp(mobile,otp) {
    return axiosInstance.post('/verify-otp',{mobile,otp})
    .then(() => true)
    .catch(error => {
        console.log(error)
    })
}

export async function latestVersion() {
    return axiosInstance.get('/latest-version')
    .then(res => {return res;})
    .catch(
        error => {
            console.log(error)
        }
    )
}