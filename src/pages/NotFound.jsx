import { Link } from "react-router-dom"

/**
 * NotFound is a component used when navigating the route below:
 *
 * { path: "*", element: <NotFound /> }
 *
 * @returns ReactElement
 */
const NotFound = () => {
	return (
		<main className="not-found">
			<div className="group">
				<h1 className="title">404</h1>
				<p className="mess">The page you're looking for doesn't exist.</p>
			</div>
			<Link
				to="/"
				className="link"
			>
				Back to home
			</Link>
		</main>
	)
}

export default NotFound
