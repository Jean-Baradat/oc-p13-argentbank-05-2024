import axios from "axios"
import {
	getAuthToken,
	isAuthTokenValid,
	removeAuthToken,
} from "@/services/AuthToken"

/**
 * Create a new instance of axios
 */
const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}`,
})

/**
 * Add Authorization header if the user is logged in
 */
axiosInstance.interceptors.request.use(config => {
	if (isAuthTokenValid()) {
		config.headers.Authorization = `Bearer ${getAuthToken()}`
	}
	return config
})

/**
 * Interceptor for handling 401 Unauthorized error and redirecting to login page
 */
axiosInstance.interceptors.response.use(
	response => response,
	error => {
		if (error.config.navigateFn) {
			if (error.response.status === 401) {
				removeAuthToken()
				error.config.navigateFn()
			}
		}
		return Promise.reject(error)
	},
)

/**
 *
 * @param {*} endpoint
 * @param {*} method
 * @param {*} navigateFn
 * @param {*} data
 * @returns
 */
export const sendRequest = async (
	endpoint,
	method,
	navigateFn = null,
	data = {},
) => {
	const response = await axiosInstance({
		method,
		url: endpoint,
		data,
		navigateFn,
	})
	return response.data
}
