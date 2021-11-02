import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadDataCoins, loadDataCourseHistory } from './redux/actions'
import './App.css';
import Menu from './Menu/Menu'
import { menuItem } from './untility/Consts'
import MessagesIcon from './img/messagesIcon.svg'
import NotificationIcon from './img/notificationIcon.svg'
import OverViewContent from './overViewContent/OverViewContent';
import WalletsContent from './walletsContent/walletsContent'

function App() {
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

    const [open, setOpen] = useState(false)

    const handleOnClick = () => {
        setOpen(!open)
    }

    return (
        <div className='wrapper_container'>
            <header className={`${open ? 'active' : ''}`}>
                <h1>valuet</h1>
                <hr />
                <div className='wrapper_menu'>
                    <nav className='menu_body'>
                        <Menu menuItem={menuItem} />
                    </nav>
                    <hr />
                </div>
                <div className='wrapper_person'>
                    <div className='wrapper_person_profile'>
                        <div className='person_circle'></div>
                        <p>Mike Jakson</p>
                    </div>
                    <div className='wrapper_log_out'>
                        <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M7.30965 11.2L8.55409 12.4444L12.9985 8L8.55409 3.55556L7.30965 4.8L9.62076 7.11111H0.998535V8.88889H9.57631L7.30965 11.2ZM15.2208 0H2.77631C1.79854 0 0.998535 0.8 0.998535 1.77778V5.33333H2.77631V1.77778H15.2208V14.2222H2.77631V10.6667H0.998535V14.2222C0.998535 15.2 1.79854 16 2.77631 16H15.2208C16.1985 16 16.9985 15.2 16.9985 14.2222V1.77778C16.9985 0.8 16.1985 0 15.2208 0Z' />
                        </svg>
                        <a href='# ' className='log_out'>Log Out</a>
                    </div>
                </div>
            </header>
            <section className='wrapper_content_top'>
                <div className='search_message_notification'>
                    <form action='' method='GET'>
                        <input type='search' placeholder='Search' className='search' />
                        <button type='submit' className='btn_search'></button>
                    </form>
                    <div className='wrapper_notifications'>
                        <img src={MessagesIcon} alt='' />
                        <div className={`wrapper-messages ${open ? '' : ''}`}>
                            <p>Not Messages</p>
                        </div>
                        <img src={NotificationIcon} alt='' />
                        <div onClick={handleOnClick} className={`menu_burger ${open ? 'active' : ''}`}>
                            <span></span>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
            <section className='wrapper_content_center'>
                <OverViewContent dataCoinsChart={dataCoinsChart} dataCoinsCourseHistory={dataCoinsCourseHistory} />
                {/* <WalletsContent dataCoinsChart={dataCoinsChart} /> */}
            </section>
        </div>
    )
}

export default App;
