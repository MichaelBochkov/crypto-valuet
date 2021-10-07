import { combineReducers } from "redux";
import { loadDataCoinsReducer } from "./loadDataCoinsReducer";
import { loadDataCoinsCourseHistoryReducer } from "./loadDataCoinsCourseHistoryReducer"

export const rootReducer = combineReducers({
    loadDataCoinsReducer,
    loadDataCoinsCourseHistoryReducer
});