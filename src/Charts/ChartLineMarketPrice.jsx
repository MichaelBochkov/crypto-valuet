import React, { useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Brush } from 'recharts';
import dateFormat from 'dateformat';
import { date, month, years, chartNavYear, chartNavMonth } from '../untility/Consts'

function ChartLineMarketPrice(props) {
  const dataCoins = JSON.parse(JSON.stringify(props.dataCoinsCourseHistory))
  let newChart = []

  const [dataChart, setDataChart] = useState(newChart)
  const [valueMonth, setvalueMonth] = useState(month[date.getMonth()])
  const [valueYear, setvalueYear] = useState(years[1])

  useEffect(() => {
    for (let prop in dataCoins) {
      dataCoins[prop] = {
        dayChart: dateFormat(dataCoins[prop].date, 'mmm dd'),
        dateChart: dateFormat(dataCoins[prop].date, 'dd-mm-yyyy'),
        monthChart: dateFormat(dataCoins[prop].date, 'mmmm'),
        yearChart: dateFormat(dataCoins[prop].date, 'yyyy'),
        priceUsd: Math.ceil(dataCoins[prop].priceUsd)
      }
      if (dataCoins[prop].monthChart === valueMonth && dataCoins[prop].yearChart === valueYear) {
        newChart.push(dataCoins[prop])
      }
    }
    setDataChart(newChart)
  }, [valueMonth, valueYear])

  return (
    <div className='wrapper_market_price'>
      <div className='wrapper_market_price_content_top'>
        <h2>Market</h2>
        <p className='btn_coin'>Bitcoin</p>
        <div className='month_chart'>
          <select className='navigation_chart' value={valueMonth} onChange={(event) => setvalueMonth(event.target.value)}>
            {chartNavMonth}
          </select>
        </div>
        <div className='year_chart'>
          <select className='navigation_chart' value={valueYear} onChange={(event) => setvalueYear(event.target.value)}>
            {chartNavYear}
          </select>
        </div>
      </div>
      <div className='line_chart_market_price' >
        <ResponsiveContainer>
          <LineChart data={dataChart}>
            <Line dataKey='priceUsd' type='monotone' stroke='#018FFF' strokeWidth={3} dot={{ strokeWidth: 5 }} />
            <YAxis dataKey='priceUsd' type='number' domain={[0, 'dataMax + 30000']} axisLine={false} tickLine={false} />
            <XAxis dataKey='dayChart' interval={0} padding={{ left: 40, right: 40 }} axisLine={false} tickLine={false} />
            <Brush startIndex={0} endIndex={9} travellerWidth={0} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartLineMarketPrice