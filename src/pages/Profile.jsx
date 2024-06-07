import { getAuthToken } from "@/services/AuthToken"
import { useGetUserProfileQuery } from "@/store/ApiSlices"
import React, { useState } from "react"

const Profile = () => {
	const [updateUserName, setUpdateUserName] = useState(false)
	const { data, isLoading, isSuccess } = useGetUserProfileQuery(getAuthToken())

	return (
		<main className="main bg-dark">
			<div className="header">
				{!updateUserName ? (
					<>
						<h1>
							Welcome back
							<br />
							{isLoading ? (
								<span>lodding...</span>
							) : (
								isSuccess && (
									<>
										{data.body.firstName} {data.body.lastName}!
									</>
								)
							)}
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
									placeholder={data?.body.firstName}
								/>
							</div>
							<div className="input-wrapper">
								<input
									type="text"
									id="last-name"
									placeholder={data?.body.lastName}
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
