import { jwtDecode } from "jwt-decode"

const TOKEN_KEY = "auth_token"

/**
 * Save the auth token in the local storage
 * @param {string} token
 */
export const saveAuthToken = token => {
	localStorage.setItem(TOKEN_KEY, token)
}

/**
 * Get the auth token form local storage
 * @returns TOKEN_KEY
 */
export const getAuthToken = () => {
	return localStorage.getItem(TOKEN_KEY)
}

/**
 * Delete the auth token form local storage
 */
export const removeAuthToken = () => {
	localStorage.removeItem(TOKEN_KEY)
}

/**
 * With JWT decode get the auth token data
 * @returns token data
 */
export const getUserFromAuthToken = () => {
	const token = getAuthToken()
	return token ? jwtDecode(token) : null
}

/**
 * Test if auth token is valid and exist
 * @returns {boolean} is expired ?
 */
export const isAuthTokenValid = () => {
	const token = getAuthToken()

	if (!token) {
		return false
	}

	try {
		const { exp: expirationDate } = jwtDecode(token)
		const isExpired = Date.now() >= expirationDate * 1000
		return !isExpired
	} catch {
		removeAuthToken()
		return false
	}
}
