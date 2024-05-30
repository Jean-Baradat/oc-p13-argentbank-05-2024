import { isAuthTokenValid } from "@/services/AuthToken"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

/**
 *
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ children, modeLoginAccess }) => {
	let isLogin = isAuthTokenValid()

	return modeLoginAccess ? (
		isLogin ? (
			children
		) : (
			<Navigate to="/login" />
		)
	) : isLogin ? (
		<Navigate to="/profile" />
	) : (
		children
	)
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
	modeLoginAccess: PropTypes.bool.isRequired,
}

export default PrivateRoute
