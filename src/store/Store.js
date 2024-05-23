import { configureStore, createSlice } from "@reduxjs/toolkit"

const comSlice = createSlice({
	name: "Com",
	initialState: {
		question: "default value",
		response: "",
	},
	reducers: {
		// action : {type: '', payload: tout ce qu'on veut}
		sendQuestion: (state, action) => {
			state.question = action.payload
		},
		sendResponse: (state, action) => {
			state.response = action.payload
		},
	},
})

export const mainStore = configureStore({
	reducer: {
		[comSlice.name]: comSlice.reducer,
		// Com: comSlice.reducer,
	},
})
