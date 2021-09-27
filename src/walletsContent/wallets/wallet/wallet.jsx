import React from 'react'
import CoinsIcons from '../../../overViewContent/img/coins/CoinsIcons'

function Wallet({ user }) {

  return (
    <div className='items_wallet'>
      <h3>{user.name}</h3>
      <div className='coin'>
        <div className='coin_two'>
          <CoinsIcons name={user.name} />
        </div>
      </div>
    </div>
  )
}

export default Wallet