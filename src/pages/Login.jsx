import { FaUserCircle } from "react-icons/fa"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { saveAuthToken } from "@/services/authToken"

/**
 *
 * @returns
 */
const Login = () => {
	const [loginError, setLoginError] = useState(null)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "steve@rogers.com",
			password: "password456",
		},
	})

	/**
	 *
	 * @param {*} data
	 */
	const onSubmit = data => {
		axios
			.post(`${import.meta.env.VITE_API_LOGIN_FULL_PATH}`, data)
			.then(result => {
				setLoginError(false)
				saveAuthToken(result.data.body.token)
			})
			.catch(_ => {
				setLoginError(true)
			})
	}

	return loginError === true || loginError === null ? (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FaUserCircle />
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input
							{...register("email", {
								required: "The user name is required",
							})}
							type="text"
							id="email"
						/>
						<p className="error-message">
							{errors.email ? errors.email.message : "\u00A0"}
						</p>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							{...register("password", {
								required: "The password is required",
							})}
							type="password"
							id="password"
						/>
						<p className="error-message">
							{errors.password ? errors.password.message : "\u00A0"}
						</p>
					</div>
					<div className="input-remember">
						<input
							type="checkbox"
							id="remember-me"
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<input
						className="sign-in-button"
						type="submit"
					/>
					<p className="login-error">
						{loginError ? "Some information is incorrect" : "\u00A0"}
					</p>
				</form>
			</section>
		</main>
	) : (
		<Navigate
			to="/profile"
			replace={true}
		/>
	)
}

export default Login
