import React, { useEffect, useState } from 'react'
import { colors } from '../untility/Consts'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Label } from 'recharts';
import useCoinsAssets from '../api/useCoinsAssets';

function ChartDonutBalance(props) {
  const coinsAssets = useCoinsAssets()
  const dataCoinsChart = JSON.parse(JSON.stringify(coinsAssets[0]))
  const costCoins = []

  const [users, setUsers] = useState(JSON.parse(JSON.stringify(props.Users.balance)))
  const [sumCoins, setSumCoins] = useState(users.reduce((a, b) => a + b.quantity, 0))

  const [dataChart, setDataChart] = useState(users
    .sort((a, b) => { return b.quantity - a.quantity })
    .slice(0, 3))

  const [chartBalance, setChartBalance] = useState()

  useEffect(() => {
    for (let prop in dataCoinsChart.data) {
      const coinName = dataCoinsChart.data[prop].name
      const usdPrice = dataCoinsChart.data[prop].priceUsd
      for (let prop in users) {
        if (coinName === users[prop].name) {
          costCoins.push(usdPrice * users[prop].quantity)
        }
      }
    }
    setChartBalance(Math.floor(costCoins.reduce((a, b) => a + b, 0) * 100) / 100)
  }, [dataCoinsChart, users])

  const customLabel = () => {
    return (
      <g>
        <text className='custom_label' x='50%' y='40%' dy={9} textAnchor='middle'>
          <tspan>Balance</tspan>
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