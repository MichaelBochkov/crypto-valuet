import React, { useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Brush, Tooltip } from 'recharts';
import dateFormat from 'dateformat';
import { chartNavCoins, chartCoins, month, years, date, chartNavYear, chartNavMonth } from '../untility/Consts'

function ChartLineMarketPrice(props) {
  const dataCoins = JSON.parse(JSON.stringify(props.dataCoinsCourseHistory))

  const newChart = []
  const [dataChart, setDataChart] = useState()
  const [selectedCoinChart, setSelectedCoinChart] = useState(chartCoins[0])

  const [valueMonth, setValueMonth] = useState(month[date.getMonth()])
  const [valueYear, setValueYear] = useState(years[1])

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
      setDataChart(newChart)
    }
  }, [valueMonth, valueYear])

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <ul className='custom-tooltip'>
          <li>
            <span>{`Cost: ${payload[0].value} $`}</span>
            <span>{`Date: ${payload[0].payload.dateChart}`}</span>
          </li>
        </ul>
      )
    }
    return null
  }

  console.log(dataChart);

  return (
    <div className='wrapper_market_price'>
      <div className='wrapper_market_price_content_top'>
        <h2>Market</h2>
        <select className='navigation_chart' value={selectedCoinChart} onChange={event => setSelectedCoinChart(event.target.value)}>
          {chartNavCoins}
        </select>
        <div className='month_chart'>
          <select className='navigation_chart' value={valueMonth} onChange={event => setValueMonth(event.target.value)}>
            {chartNavMonth}
          </select>
        </div>
        <div className='year_chart'>
          <select className='navigation_chart' value={valueYear} onChange={event => setValueYear(event.target.value)}>
            {chartNavYear}
          </select>
        </div>
      </div>
      <div className='line_chart_market_price' >
        <ResponsiveContainer>
          <LineChart data={dataChart}>
            <Tooltip cursor={false} content={CustomTooltip} active={true} />
            <Line dataKey='priceUsd' type='monotone' stroke='#018FFF' strokeWidth={3} dot={{ strokeWidth: 5 }} />
            <YAxis dataKey='priceUsd' type='number' domain={['dataMin', 'dataMax']} axisLine={false} tickLine={false} />
            <XAxis dataKey='dayChart' padding={{ left: 40, right: 40 }} axisLine={false} tickLine={false} />
            <Brush startIndex={0} endIndex={9} travellerWidth={1} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartLineMarketPrice