import React from 'react'
import Wallet from './wallet/wallet'


function Wallets(props) {
  const users = JSON.parse(JSON.stringify(props.Users.balance))
  const CostCoins = props.dataCoinsChart

  return (
    <div className='wrapper_wallet'>
      {
        users.map(user => {
          return (
            <Wallet user={user} key={user.id} CostCoins={CostCoins} />
          )
        })
      }
    </div>
  )
}

export default Wallets