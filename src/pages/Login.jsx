import { FaUserCircle } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { saveAuthToken } from "@/services/AuthToken"
import { sendRequest } from "@/services/ApiClient"

/**
 *
 * @returns
 */
const Login = () => {
	const [loginError, setLoginError] = useState(false)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "steve@rogers.com",
			password: "password456",
		},
	})

	let email = watch("email")
	let password = watch("password")

	useEffect(() => {
		setLoginError(false)
	}, [email, password])

	/**
	 *
	 * @param {*} data
	 */
	const onSubmit = data => {
		sendRequest("/user/login", "POST", null, data)
			.then(result => {
				saveAuthToken(result.body.token)
				navigate("/profile")
			})
			.catch(_ => {
				setLoginError(true)
			})
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FaUserCircle />
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input
							{...register("email", {
								required: "The email is required",
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
	)
}

export default Login
