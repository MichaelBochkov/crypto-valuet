import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { loadDataCoins } from '../redux/actions'
import { colors } from '../untility/Consts'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Label } from 'recharts';

function ChartDonutBalance(props) {
  const costCoins = []
  const [chartBalance, setChartBalance] = useState()

  const users = JSON.parse(JSON.stringify(props.Users.balance))
  const sumCoins = users.reduce((a, b) => a + b.quantity, 0)

  const dataCoins = props.dataCoinsChart

  const dataChart = users
    .sort((a, b) => { return b.quantity - a.quantity })
    .slice(0, 3)

  useEffect(() => {
    for (let prop in dataCoins) {
      const coinName = dataCoins[prop].name
      const usdPrice = dataCoins[prop].priceUsd
      for (let prop in users) {
        if (coinName === users[prop].name) {
          costCoins.push(usdPrice * users[prop].quantity)
        }
      }
    }
    setChartBalance(Math.floor(costCoins.reduce((a, b) => a + b, 0) * 100) / 100)
  }, [dataCoins, users])

  const customLabel = () => {
    return (
      <g>
        <text className='custom_label' x='50%' y='40%' dy={-5} textAnchor='middle'>
          <tspan x='50%' y='42%'>Balance</tspan>
          <tspan x='51%' y='52%'>{chartBalance} $</tspan>
        </text>
      </g>
    )
  }

  const customLegend = () => {
    return (
      <ul>
        {
          dataChart.map((entry, index) => (
            <li key={`item-${index}`}>
              <span style={{ color: colors[index % colors.length] }}>{entry.name}</span>
              <span style={{ color: colors[index % colors.length] }}>{Math.ceil(entry.quantity / sumCoins * 100)}%</span>
            </li >
          ))
        }
      </ul>
    )
  }

  return (
    <div name='donut_chart' className='donut_chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width='100%' height='100%'>
          <Pie data={dataChart} dataKey='quantity' cx='50%' cy='55%' innerRadius={80} outerRadius={100}>
            {dataChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            <Label content={customLabel} />
          </Pie>
          <Legend content={customLegend} wrapperStyle={{ position: 'unset', height: 'auto' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

}

export default ChartDonutBalance