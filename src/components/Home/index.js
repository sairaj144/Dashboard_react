import {Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
import Inventory from '../Inventory'
import Order from '../Order'
import Returns from '../Returns'
import Customers from '../Customers'
import Integrations from '../Integrations'
import Channel from '../Channel'
import './index.css'

const Home =()=>{
    return(
        < >
        <div className='Home-container'>
        <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/Returns" element={<Returns />} />
                <Route path="/Customers" element={<Customers />} />
                <Route path="/Integrations" element={<Integrations />} />
                <Route path="/Channel" element={<Channel />} />
            </Routes> 
        </div>
        </>
    )
}

export default Home