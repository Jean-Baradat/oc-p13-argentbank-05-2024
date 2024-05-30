import { isAuthTokenValid, removeAuthToken } from "@/services/AuthToken"
import { sendRequest } from "@/services/ApiClient"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
	const [updateUserName, setUpdateUserName] = useState(false)
	const [user, setUser] = useState([])
	const navigate = useNavigate()

	/**
	 * Listen to the localStorage change
	 */
	useEffect(() => {
		const handleStorageChange = event => {
			if (event.key === "auth_token") {
				if (!isAuthTokenValid()) {
					removeAuthToken()
					navigate("/login")
				}
			}
		}

		window.addEventListener("storage", handleStorageChange)

		return () => {
			window.removeEventListener("storage", handleStorageChange)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	/**
	 * Fetch user profile from API
	 */
	useEffect(() => {
		sendRequest("/user/profile", "POST", () => navigate("/login"))
			.then(response => {
				setUser({
					firstName: response.body.firstName,
					lastName: response.body.lastName,
				})
			})
			.catch(_ => {
				// Here we can handle the error for Profile page
				// like display a toast message if 403 error and
				// all other errors don't catch in interceptor
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<main className="main bg-dark">
			<div className="header">
				{!updateUserName ? (
					<>
						<h1>
							Welcome back
							<br />
							{user.firstName} {user.lastName}!
						</h1>
						<button
							className="edit-button"
							onClick={() => setUpdateUserName(true)}
						>
							Edit Name
						</button>
					</>
				) : (
					<div className="form">
						<h1>Welcome back</h1>
						<div className="input-container">
							<div className="input-wrapper">
								<input
									type="text"
									id="first-name"
									placeholder={user.firstName}
								/>
							</div>
							<div className="input-wrapper">
								<input
									type="text"
									id="last-name"
									placeholder={user.lastName}
								/>
							</div>
						</div>
						<div className="button-container">
							<button
								className="edit-button"
								onClick={() => setUpdateUserName(false)}
							>
								Save
							</button>
							<button
								className="edit-button"
								onClick={() => setUpdateUserName(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	)
}

export default Profile
