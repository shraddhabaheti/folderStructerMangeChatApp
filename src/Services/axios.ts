import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.37:4000'
})

axiosInstance.interceptors.request.use(
    async (config: any) => {
        let token = localStorage.getItem('token')

        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        return config
    }
);
axiosInstance.interceptors.response.use(undefined, (error: any) => {
    if (error.message === "Network Error" && !error.response) {
        console.log("Network error make sure api is reunning ")
    }
    if (error.response) {
        let { status } = error.response;
        if (status === "404") {
            console.log("Not Found")
        }
        if (status === "401") {
            console.log("your session has expired,please login again")
        }
        return error.response;
    } else {
        console.log(error);
        return error
    }
})
export default axiosInstance;