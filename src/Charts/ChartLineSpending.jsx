import React from 'react'
import SpendingJson from '../json/spending.json'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, Brush } from 'recharts';

let data = SpendingJson.spendings

const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <ul className='custom-tooltip'>
                <li>
                    <span>{`Spending: ${payload[0].value} $`}</span>
                    <span>{`Date: ${payload[0].payload.date}`}</span>
                </li>
            </ul>
        )
    }
    return null
}

function ChartLineSpending() {
    return (
        <div className='line_chart'>
            <p>
                Total spending: {data.reduce((a, b) => a + b.spending, 0)} $
            </p>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data} >
                    <Tooltip cursor={false} content={CustomTooltip} active={true} />
                    <Line dataKey='spending' type='monotone' stroke='#018FFF' strokeWidth={3} dot={{ strokeWidth: 5 }} />
                    <XAxis className='spending_cartesian-axis' dataKey='id' interval={0} padding={{ left: 15, right: 15 }} axisLine={false} tickLine={false} />
                    <Brush startIndex={0} endIndex={9} travellerWidth={0} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartLineSpending