import React, { useEffect, useState } from 'react'
import CoinsIcons from '../../../overViewContent/img/coins/CoinsIcons'

function Wallet({ user }) {
  const dataCostCoinsUsd = JSON.parse(JSON.stringify(user))

  const [usdPriceCoin, setUsdPriceCoin] = useState()

  return (
    <div className='items_wallet'>
      <h3>{user.name}</h3>
      <div className="usd_price">
        <p>{usdPriceCoin} USD</p>
      </div>
      <div className='coin'>
        <div className='coin_two'>
          <CoinsIcons name={user.name} />
        </div>
      </div>
    </div>
  )
}

export default Wallet