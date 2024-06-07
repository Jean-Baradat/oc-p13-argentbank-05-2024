import Header from "@/layouts/Header"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from "@/layouts/Footer"
import { useEffect } from "react"
import { isAuthTokenValid, removeAuthToken } from "@/services/AuthToken"

const Layout = () => {
	const navigate = useNavigate()

	/**
	 * Listen to the localStorage change
	 */
	useEffect(() => {
		const handleStorageChange = event => {
			if (event.key === "auth_token") {
				if (!isAuthTokenValid()) {
					removeAuthToken()
					navigate("/login")
				}
			}
		}

		window.addEventListener("storage", handleStorageChange)

		return () => {
			window.removeEventListener("storage", handleStorageChange)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
