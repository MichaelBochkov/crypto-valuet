import {
    LOAD_DATA_COINS
} from "./types";

const initialState = {
    dataCoins: []
}

export const loadDataCoinsReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_DATA_COINS:
            const dataCoinsNew = action.data.map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    symbol: res.symbol,
                    priceUsd: res.current_price
                };
            })
            return {
                ...state,
                dataCoins: dataCoinsNew
            }

        default:
            return state
    }
}