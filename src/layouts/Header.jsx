import { FaUserCircle } from "react-icons/fa"
import { MdLogout } from "react-icons/md"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useGetUserProfileQuery } from "@/store/ApiSlices"
import { getAuthToken, removeAuthToken } from "@/services/AuthToken"

const Header = () => {
	const { data, isLoading, isSuccess, isFetching } =
		useGetUserProfileQuery(getAuthToken())
	const navigate = useNavigate()
	const handleLogout = () => {
		removeAuthToken()
		navigate("/login")
	}

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
					{isLoading ? (
						<div className="skeleton-main-nav-items">
							<div className="skeleton-main-nav-item">
								<div className="cercle"></div>
								<div className="square"></div>
							</div>
							<div className="skeleton-main-nav-item">
								<div className="cercle"></div>
								<div className="square"></div>
							</div>
						</div>
					) : isSuccess ? (
						<div className="main-nav-items">
							{!isFetching ? (
								<>
									<NavLink
										to="/profile"
										className={({ isActive }) =>
											isActive
												? "router-link-exact-active main-nav-item"
												: "main-nav-item"
										}
									>
										<FaUserCircle />
										{data.body.firstName}
									</NavLink>
									<button
										onClick={handleLogout}
										className="main-nav-item remove-btn-default-style"
									>
										<MdLogout />
										Sign out
									</button>
								</>
							) : (
								<div className="skeleton-main-nav-items">
									<div className="skeleton-main-nav-item">
										<div className="cercle"></div>
										<div className="square"></div>
									</div>
									<div className="skeleton-main-nav-item">
										<div className="cercle"></div>
										<div className="square"></div>
									</div>
								</div>
							)}
						</div>
					) : (
						<NavLink
							to="/login"
							className={({ isActive }) =>
								isActive
									? "router-link-exact-active main-nav-item"
									: "main-nav-item"
							}
						>
							<span>Sign In</span>
						</NavLink>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Header
