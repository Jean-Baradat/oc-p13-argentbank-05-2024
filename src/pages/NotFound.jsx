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
				<p className="mess">Oups! La page que vous demandez n'existe pas.</p>
			</div>
			<Link
				to="/"
				className="link"
			>
				Retourner sur la page d’accueil
			</Link>
		</main>
	)
}

export default NotFound
