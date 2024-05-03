import { FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<nav className="main-nav">
				<Link
					to="/"
					className="main-nav-logo"
				>
					<img
						className="main-nav-logo-image"
						src="./argentBankLogo.png"
						alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					{/* TODO: switch to login display */}
					<Link
						to="/login"
						className="main-nav-item"
					>
						<FaUserCircle />
						<span>Sign In</span>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
