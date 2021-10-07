import React, { useState, useEffect } from 'react'
import CoinsIcons from '../../img/coins/CoinsIcons'

function CoinsContent({ user, dataCoins }) {
    const dataUsersCoins = JSON.parse(JSON.stringify(user))
    let sortDataCost = {
        name: '',
        symbol: '',
        costUsd: 0,
        costUsdOneCoin: 0,
        btcPrice: 0
    }

    const [DataCost, setNewDataCost] = useState(sortDataCost)

    useEffect(() => {
        let btcPriceUsd = 0
        for (let prop in dataCoins) {
            const coinName = dataCoins[prop].name
            const usdPrice = dataCoins[prop].priceUsd
            const symbol = dataCoins[prop].symbol

            if (coinName === 'Bitcoin') {
                btcPriceUsd = usdPrice
            }
            if (coinName === dataUsersCoins.name) {
                sortDataCost.name = coinName
                sortDataCost.symbol = symbol
                sortDataCost.costUsd = Math.floor(dataUsersCoins.quantity * usdPrice * 100) / 100
                sortDataCost.costUsdOneCoin = Math.floor(usdPrice * 100) / 100
                sortDataCost.btcPrice = Math.floor(usdPrice / btcPriceUsd * 100000) / 100000
            }
        }
        setNewDataCost(sortDataCost)
    }, [dataCoins])

    return (
        <div className='wrapper_coin'>
            <div className='wrapper_coin_content_left'>
                <p>{user.name} </p>
                <div className='coin'>
                    <div className='coin_two'>
                        <CoinsIcons name={user.name} />
                    </div>
                </div>
            </div>
            <div className='wrapper_coin_content_center'>
                <p>{user.quantity} {DataCost.symbol}</p>
                <p>{DataCost.costUsd} $</p>
            </div>
            <div className='wrapper_coin_content_right'>
                <p>1 {DataCost.symbol} = {DataCost.costUsdOneCoin} $</p>
                <p>1 BTC = {DataCost.btcPrice} {DataCost.symbol}</p>
            </div>
        </div>
    )
}

export default CoinsContent