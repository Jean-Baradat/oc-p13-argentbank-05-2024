import { createApi } from "@reduxjs/toolkit/query/react"
import axios from "axios"

const axiosBaseQuery = ({ baseUrl } = { baseUrl: "" }) => {
	return async ({ url, method, data, headers }) => {
		try {
			const result = await axios({
				url: baseUrl + url,
				method,
				data,
				headers,
			})
			return { data: result.data }
		} catch (axiosError) {
			return {
				error: {
					status: axiosError.response?.status,
					data: axiosError.response?.data || axiosError.message,
				},
			}
		}
	}
}

export const userApi = createApi({
	reducerPath: "User",
	baseQuery: axiosBaseQuery({
		baseUrl: `${import.meta.env.VITE_API_URL}/user`,
	}),
	endpoints: builder => {
		return {
			/**
			 *
			 */
			getUserProfile: builder.query({
				query: token => ({
					url: "/profile",
					method: "POST", // Normally GET but API needs update
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}),
				providesTags: ["UserProfile"],
			}),

			/**
			 *
			 */
			userLogin: builder.mutation({
				query: data => ({
					url: "/login",
					method: "POST",
					data,
				}),
			}),

			/**
			 *
			 */
			updateUserProfile: builder.mutation({
				query: ({ data, token }) => {
					return {
						url: "/profile",
						method: "PUT",
						data,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				},
				invalidatesTags: ["UserProfile"],
			}),
		}
	},
})

export const { useGetUserProfileQuery } = userApi
export const { useUserLoginMutation } = userApi
export const { useUpdateUserProfileMutation } = userApi
