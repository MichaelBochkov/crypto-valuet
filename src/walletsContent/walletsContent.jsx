import React from 'react'
import './walletContent.css'
import ChartDonutBalance from '../Charts/ChartDonutBalance'
import Users from '../json/userBalance.json'
import Wallets from './wallets/wallets'
import ChartLineSpending from '../Charts/ChartLineSpending'

function WalletContent(props) {

  return (
    <div className='wrapper_wallet_content'>
      <h2>Wallets</h2>
      <div className='wrapper_info_wallets'>
        <div className='wraper_donut_chart'>
          <ChartDonutBalance Users={Users} dataCoinsChart={props.dataCoinsChart} />
        </div>
        <div className='wrapper_wallets'>
          <Wallets Users={Users} dataCoinsChart={props.dataCoinsChart} />
        </div>
      </div>
      <div className='wrapper_spendings_transactioins'>
        <div className='wrapper_spendings'>
          <ChartLineSpending />
        </div>
        <div className='wrapper_transactioins'>
          <div className='wrapper_transactions_top'>
            <h3>recent transactions</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletContent;
