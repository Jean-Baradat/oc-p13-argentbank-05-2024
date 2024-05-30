import { configureStore } from "@reduxjs/toolkit"
import { comSlice } from "@/store/Reducers"

export const mainStore = configureStore({
	reducer: {
		[comSlice.name]: comSlice.reducer,
	},
})
