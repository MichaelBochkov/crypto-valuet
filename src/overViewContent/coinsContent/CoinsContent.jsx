import React from 'react'
import CoinsItem from './coinsItem/CoinsItem'

function CoinsContent(props) {
  let users = JSON.parse(JSON.stringify(props.Users.balance))
  let dataChart = users
    .slice()
    .sort((a, b) => { return b.quantity - a.quantity })
    .slice(0, 4)

  return (
    <div className='wrapper_coins'>
      {
        dataChart.map(user => {
          return (
            <CoinsItem user={user} key={user.id} />
          )
        })
      }
    </div>
  )
}

export default CoinsContent