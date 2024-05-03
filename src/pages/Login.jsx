import React from "react"
import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"

const Login = () => {
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FaUserCircle />
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
						/>
					</div>
					<div className="input-remember">
						<input
							type="checkbox"
							id="remember-me"
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<Link
						to="/"
						className="sign-in-button"
					>
						Sign In
					</Link>
				</form>
			</section>
		</main>
	)
}

export default Login
