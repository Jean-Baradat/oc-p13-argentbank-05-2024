import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useUpdateUserProfileMutation } from "@/store/ApiSlices"
import { getAuthToken } from "@/services/AuthToken"
import { FaInfoCircle } from "react-icons/fa"

/**
 *
 * @param {*} param0
 * @returns
 */
const NameForm = ({ setUpdateUserName, data }) => {
	const { handleSubmit, register, reset } = useForm()
	const [isDisabled, setIsDisabled] = useState({
		disable: false,
		content: {
			btnSave: "Save",
			btnCancel: "Cancel",
		},
	})
	const [updateProfileState, setUpdateProfileState] = useState({
		error: false,
		success: false,
		unchanged: false,
	})
	const [updateUserProfile] = useUpdateUserProfileMutation()

	/**
	 *
	 * @param {*} stateUpdated
	 */
	const handleUpdateProfileState = stateUpdated => {
		let newState = {
			unchanged: false,
			error: false,
			success: false,
		}
		switch (stateUpdated) {
			case "unchanged":
				newState = {
					...newState,
					unchanged: true,
				}
				break
			case "error":
				newState = {
					...newState,
					error: true,
				}
				break
			case "success":
				newState = {
					...newState,
					success: true,
				}
				break

			default:
				break
		}

		setUpdateProfileState(newState)
	}

	/**
	 *
	 * @param {*} disable
	 */
	const handleSetIsDisabled = disable => {
		setIsDisabled({
			disable,
			content: {
				btnSave: disable ? "..." : "Save",
				btnCancel: disable ? "..." : "Cancel",
			},
		})
	}

	/**
	 *
	 * @param {*} data
	 */
	const onSubmit = (
		{ "first-name": firstName, "last-name": lastName },
		data,
		reset,
	) => {
		const formattedData = {
			firstName: {
				firstName: firstName.length > 0 ? firstName : data.firstName,
				isNew: firstName !== data.firstName && firstName.length > 0,
			},
			lastName: {
				lastName: lastName.length > 0 ? lastName : data.lastName,
				isNew: lastName !== data.lastName && lastName.length > 0,
			},
		}

		if (formattedData.firstName.isNew || formattedData.lastName.isNew) {
			handleSetIsDisabled(true)
			updateUserProfile({
				data: {
					firstName: formattedData.firstName.firstName,
					lastName: formattedData.lastName.lastName,
				},
				token: getAuthToken(),
			})
				.unwrap()
				.then(_ => {
					handleSetIsDisabled(false)
					reset()
					handleUpdateProfileState("success")
				})
				.catch(_ => {
					handleSetIsDisabled(false)
					handleUpdateProfileState("error")
				})
		} else {
			handleUpdateProfileState("unchanged")
		}
	}

	return (
		<form
			className="form"
			onSubmit={handleSubmit(formData => onSubmit(formData, data, reset))}
		>
			<h1>Welcome back</h1>
			<div className="input-container">
				<div className="input-wrapper">
					<input
						{...register("first-name")}
						type="text"
						id="first-name"
						placeholder={data.firstName}
					/>
				</div>
				<div className="input-wrapper">
					<input
						{...register("last-name")}
						type="text"
						id="last-name"
						placeholder={data.lastName}
					/>
				</div>
			</div>
			<div className="button-container">
				<input
					className="edit-button"
					type="submit"
					value={isDisabled.content.btnSave}
					disabled={isDisabled.disable}
				/>

				<button
					className="edit-button"
					disabled={isDisabled.disable}
					onClick={() => setUpdateUserName(false)}
				>
					{isDisabled.content.btnCancel}
				</button>
			</div>
			{updateProfileState.error ? (
				<p className="is-error mt-1">
					<FaInfoCircle />
					An error occurred
				</p>
			) : updateProfileState.success ? (
				<p className="is-success mt-1">
					<FaInfoCircle />
					Your name has been updated
				</p>
			) : updateProfileState.unchanged ? (
				<p className="is-unchanged mt-1">
					<FaInfoCircle />
					Nothing has changed
				</p>
			) : (
				<p className="mt-1">{"\u00A0"}</p>
			)}
		</form>
	)
}

export default NameForm
