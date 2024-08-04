import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
import './index.css'

const Home =()=>{
    return(
        <div className='Home-container'>
            <Sidebar />
            <Dashboard />
        </div>
    )
}

export default Home