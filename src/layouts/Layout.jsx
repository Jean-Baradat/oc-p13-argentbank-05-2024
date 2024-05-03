import Header from "@/layouts/Header"
import { Outlet } from "react-router-dom"
import Footer from "@/layouts/Footer"

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
