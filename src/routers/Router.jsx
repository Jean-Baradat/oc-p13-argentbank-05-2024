import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Layout from "@/layouts/Layout"
import Login from "@/pages/Login"
import Profile from "@/pages/Profile"
import PrivateRoute from "@/routers/PrivateRoute"

/**
 * Router is an array of the application's hard routes
 */
const Router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: (
					<PrivateRoute modeLoginAccess={false}>
						<Login />
					</PrivateRoute>
				),
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute modeLoginAccess={true}>
						<Profile />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
])

export default Router
