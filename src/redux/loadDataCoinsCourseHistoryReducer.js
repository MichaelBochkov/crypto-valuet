import {
    LOAD_DATA_COINS_COURSE_HISTORY
} from "./types";

const initialState = {
    dataCoinsHistory: []
}

export const loadDataCoinsCourseHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_DATA_COINS_COURSE_HISTORY:
            const dataCoinsNew = action.data.map(res => {
                return {
                    date: res.date,
                    priceUsd: res.priceUsd
                };
            })
            return {
                ...state,
                dataCoinsHistory: dataCoinsNew
            }

        default:
            return state
    }
}