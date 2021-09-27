import React, { useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Brush } from 'recharts';
import dateFormat from 'dateformat';
import { date, month, years } from '../untility/Consts'
import useCoinsCourseHistoryBitcoin from '../api/useCoinsCourseHistoryBitcoin'

function ChartLineMarketPrice() {

  const coinsCourseHistory = useCoinsCourseHistoryBitcoin()
  const dataCoinsCourseHistory = JSON.parse(JSON.stringify(coinsCourseHistory[0]))

  const [dataChart, setDataChart] = useState()

  const [valueMonth, setvalueMonth] = useState(month[date.getMonth()])
  const [valueYear, setvalueYear] = useState(years[1])

  useEffect(() => {
    let newChart = []
    for (let prop in dataCoinsCourseHistory.data) {
      dataCoinsCourseHistory.data[prop] = {
        dayChart: dateFormat(dataCoinsCourseHistory.data[prop].date, 'mmm dd'),
        dateChart: dateFormat(dataCoinsCourseHistory.data[prop].date, 'dd-mm-yyyy'),
        monthChart: dateFormat(dataCoinsCourseHistory.data[prop].date, 'mmmm'),
        yearChart: dateFormat(dataCoinsCourseHistory.data[prop].date, 'yyyy'),
        priceUsd: Math.ceil(dataCoinsCourseHistory.data[prop].priceUsd)
      }
      if (dataCoinsCourseHistory.data[prop].monthChart === valueMonth && dataCoinsCourseHistory.data[prop].yearChart === valueYear) {
        newChart.push(dataCoinsCourseHistory.data[prop])
      }
    }
    setDataChart(newChart)
  }, [valueMonth, valueYear])

  const chartNavYear = years.map((year, index) => {
    return (
      <option key={`item-${index}`} value={year}>{year}</option>
    )
  })

  const chartNavMonth = month.map((month, index) => {
    return (
      <option key={`item-${index}`} value={month}>{month}</option>
    )
  })

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
            <YAxis dataKey='priceUsd' type='number' tickCount={4} axisLine={false} tickLine={false} />
            <XAxis dataKey='dayChart' interval={0} padding={{ left: 40, right: 40 }} axisLine={false} tickLine={false} />
            <Brush startIndex={0} endIndex={9} travellerWidth={0} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartLineMarketPrice