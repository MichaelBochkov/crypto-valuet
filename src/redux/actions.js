import {
    LOAD_DATA_COINS,
    LOAD_DATA_COINS_COURSE_HISTORY
} from "./types";


export function loadDataCoins() {
    return async dispatch => {
        const response = await fetch('https://api.coincap.io/v2/assets/');
        const jsonData = await response.json();

        dispatch({
            type: LOAD_DATA_COINS,
            data: jsonData.data
        })
    }
}

export function loadDataCourseHistory() {
    return async dispatch => {
        const response = await fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1');
        const jsonData = await response.json();

        dispatch({
            type: LOAD_DATA_COINS_COURSE_HISTORY,
            data: jsonData.data
        })
    }
}