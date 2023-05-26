import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userId from "./slice/userId"
import userPost from "./slice/userPost"


const reduce = combineReducers({
	userId: userId,
	userPost: userPost
})

export const store = configureStore({
	reducer: reduce
}) 

export type AppDispatch = typeof store.dispatch
export type AppSelector = ReturnType<typeof store.getState>