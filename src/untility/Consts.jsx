import Icons from '../Menu/MenuIcon/MenuIcons';
import usersCoins from '../json/userBalance.json'

const colors = ['#018FFF', '#FAD679', '#F5FBFE']

const date = new Date()
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = ['2020', '2021']

const chartNavCoins = usersCoins.balance.map((coin, index) => {
    return (
        <option key={`item-${index}`} value={coin.name}>{coin.name}</option>
    )
})

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

const chartCoins = chartNavCoins.map(coin => {
    return (
        coin.props.value
    )
})

const menuItem = [{
    id: 1,
    itemName: 'Overview',
    itemSvg: < Icons name='overview'
        className='overviewIcon' />
},
{
    id: 2,
    itemName: 'Wallets',
    itemSvg: < Icons name='wallets'
        className='walletsIcon' />
},
{
    id: 3,
    itemName: 'Transictions',
    itemSvg: < Icons name='transictions'
        className='transictionsIcon' />
},
{
    id: 4,
    itemName: 'Exchange',
    itemSvg: < Icons name='exchange'
        className='exchangeIcon' />
},
{
    id: 5,
    itemName: 'Market',
    itemSvg: < Icons name='market'
        className='marketIcon' />
},
]

export { colors, date, day, month, years, menuItem, chartNavCoins, chartCoins, chartNavYear, chartNavMonth }