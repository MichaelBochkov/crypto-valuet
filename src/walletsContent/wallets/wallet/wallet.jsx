import React, { useEffect, useState } from 'react'
import CoinsIcons from '../../../overViewContent/img/coins/CoinsIcons'

function Wallet({ user, CostCoins }) {
  const [usdPriceCoin, setUsdPriceCoin] = useState()


  useEffect(() => {
    for (let prop in CostCoins) {
      const nameCoin = CostCoins[prop].name
      const priceUsd = CostCoins[prop].priceUsd
      if (nameCoin === user.name) {
        setUsdPriceCoin(priceUsd)
      }
    }
  }, [CostCoins])

  console.log(CostCoins);
  return (
    <div className='items_wallet'>
      <h3>{user.name}</h3>
      <div className="usd_price">
        <p>Cost: {usdPriceCoin} USD</p>
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