import { createSlice } from "@reduxjs/toolkit"

export const comSlice = createSlice({
	name: "Com",
	initialState: {
		question: 0,
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
