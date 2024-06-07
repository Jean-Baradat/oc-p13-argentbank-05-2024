import { jwtDecode } from "jwt-decode"

const TOKEN_KEY = "auth_token"

/**
 *
 * @param {*} token
 */
export const saveAuthToken = token => {
	localStorage.setItem(TOKEN_KEY, token)
}

/**
 *
 * @returns
 */
export const getAuthToken = () => {
	return localStorage.getItem(TOKEN_KEY)
}

/**
 *
 */
export const removeAuthToken = () => {
	localStorage.removeItem(TOKEN_KEY)
}

/**
 *
 * @returns
 */
export const getUserFromAuthToken = () => {
	const token = getAuthToken()
	return token ? jwtDecode(token) : null
}

/**
 *
 * @returns
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
