import React from 'react'
import Wallet from './wallet/wallet'


function Wallets(props) {
  let users = JSON.parse(JSON.stringify(props.Users.balance))


  return (
    <div className='wrapper_wallet'>
      {
        users.map(user => {
          return (
            <Wallet user={user} key={user.id} />
          )
        })
      }
    </div>
  )
}

export default Wallets