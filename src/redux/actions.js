import {
    LOAD_DATA_COINS,
    LOAD_DATA_COINS_COURSE_HISTORY
} from "./types";


export function loadDataCoins() {
    return async dispatch => {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h');
        const jsonData = await response.json();

        dispatch({
            type: LOAD_DATA_COINS,
            data: jsonData
        })
    }
}

export function loadDataCourseHistory() {
    return async dispatch => {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1577836800&to=1634601600');
        const jsonData = await response.json();

        dispatch({
            type: LOAD_DATA_COINS_COURSE_HISTORY,
            data: jsonData.prices
        })
    }
}