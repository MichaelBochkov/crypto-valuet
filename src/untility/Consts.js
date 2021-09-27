import Icons from '../Menu/MenuIcon/MenuIcons'

const colors = ['#018FFF', '#FAD679', '#F5FBFE']

const date = new Date()
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const years = ['2020', '2021']

const menuItem = [{
        id: 1,
        itemName: 'Overview',
        itemSvg: < Icons name = 'overview'
        className = 'overviewIcon' / >
    },
    {
        id: 2,
        itemName: 'Wallets',
        itemSvg: < Icons name = 'wallets'
        className = 'walletsIcon' / >
    },
    {
        id: 3,
        itemName: 'Transictions',
        itemSvg: < Icons name = 'transictions'
        className = 'transictionsIcon' / >
    },
    {
        id: 4,
        itemName: 'Exchange',
        itemSvg: < Icons name = 'exchange'
        className = 'exchangeIcon' / >
    },
    {
        id: 5,
        itemName: 'Market',
        itemSvg: < Icons name = 'market'
        className = 'marketIcon' / >
    },
]

export { colors, date, day, month, years, menuItem }