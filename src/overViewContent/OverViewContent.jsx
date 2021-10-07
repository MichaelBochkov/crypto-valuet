import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadDataCoins, loadDataCourseHistory } from '../redux/actions'
import './OverViewContent.css'
import { day, month, date } from '../untility/Consts'
import CoinsContent from './coinsContent/CoinsContent'
import Users from '../json/userBalance.json'
import RecentNews from './recentNews/RecentNews'
import ChartDonutBalance from '../Charts/ChartDonutBalance'
import ChartLineSpending from '../Charts/ChartLineSpending'
import ChartLineMarketPrice from '../Charts/ChartLineMarketPrice'

function OverViewContent() {

  const dataCoinsChart = useSelector(state => {
    const { loadDataCoinsReducer } = state;
    return loadDataCoinsReducer.dataCoins;
  })

  const dataCoinsCourseHistory = useSelector(state => {
    const { loadDataCoinsCourseHistoryReducer } = state;
    return loadDataCoinsCourseHistoryReducer.dataCoinsHistory;
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataCoins());
    dispatch(loadDataCourseHistory());
  }, [])

  return (
    <div className='wrapper_overview_balance_coins'>
      <div className='wrapper_overview_information'>
        <div className='wrapper_overview_datefolder'>
          <h2>Overview</h2>
          <p name='dateFolder'>{date.getDate() + ' ' + month[date.getMonth()] + ', ' + day[date.getDay()]}</p>
        </div>
        <button type='submit' className='btn_add_widget'>Add Widget</button>
      </div>
      <div className='balance_spendings_coins'>
        <div className='wrapper_balance'>
          <h3>Balance</h3>
          <div className='wrapper_donut_chart'>
            <ChartDonutBalance Users={Users} dataCoinsChart={dataCoinsChart} />
          </div>
        </div>
        <div className='wrapper_spending'>
          <div className='wrapper_spending_content'>
            <h3>Spending</h3>
            <a href='/' className='month'>Month</a>
          </div>
          <ChartLineSpending />
        </div>
        <CoinsContent Users={Users} dataCoinsChart={dataCoinsChart} />
      </div>
      <div className='wrapper_market_news'>
        <ChartLineMarketPrice dataCoinsCourseHistory={dataCoinsCourseHistory} />
        <div className='wrapper_recent_news'>
          <div className='wrapper-recent_news_top'>
            <h2>Recent News</h2>
            <hr />
          </div>
          <div className='wrapper_news'>
            <RecentNews />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverViewContent