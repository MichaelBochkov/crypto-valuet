import React from 'react'
import CoinsIcons from '../../img/coins/CoinsIcons'
import useCoinsAssets from '../../../api/useCoinsAssets'

function CoinsContent({ user }) {
    const dataCostCoinsUsd = JSON.parse(JSON.stringify(user))
    const coinsAssets = useCoinsAssets()
    const dataCoinsAssets = JSON.parse(JSON.stringify(coinsAssets[0]))

    let btcPriceUsd

    for (let prop in dataCoinsAssets.data) {
        let coinName = dataCoinsAssets.data[prop].name
        let usdPrice = dataCoinsAssets.data[prop].priceUsd
        let symbol = dataCoinsAssets.data[prop].symbol
        if (coinName === 'Bitcoin') {
            btcPriceUsd = usdPrice
        }
        if (coinName === dataCostCoinsUsd.name) {
            dataCostCoinsUsd.quantity = Math.floor(dataCostCoinsUsd.quantity * usdPrice * 100) / 100
            dataCostCoinsUsd.symbol = symbol
            dataCostCoinsUsd.usdPrice = Math.floor(usdPrice * 100) / 100
            dataCostCoinsUsd.btcPrice = Math.floor(usdPrice / btcPriceUsd * 100000) / 100000
        }
    }

    return (
        <div className='wrapper_coin'>
            <div className='wrapper_coin_content_left'>
                <p>{user.name}</p>
                <div className='coin'>
                    <div className='coin_two'>
                        <CoinsIcons name={user.name} />
                    </div>
                </div>
            </div>
            <div className='wrapper_coin_content_center'>
                <p>{user.quantity} {dataCostCoinsUsd.symbol}</p>
                <p>{dataCostCoinsUsd.quantity} $</p>
            </div>
            <div className='wrapper_coin_content_right'>
                <p>1 {dataCostCoinsUsd.symbol} = {dataCostCoinsUsd.usdPrice} $</p>
                <p>1 BTC = {dataCostCoinsUsd.btcPrice} {dataCostCoinsUsd.symbol}</p>
            </div>
        </div>
    )
}

export default CoinsContent