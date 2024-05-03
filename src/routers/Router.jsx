import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Layout from "@/layouts/Layout"
import Login from "@/pages/Login"
import Profile from "@/pages/Profile"

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
				element: <Login />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
])

export default Router
