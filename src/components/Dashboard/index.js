
import { CiCircleInfo } from "react-icons/ci";
import './index.css'
import SalesOrdersChart from './linechart.js'
import SalespieChart from './piechart.js'


const Dashboard =()=>{
return(
    <div className='dashboard-container'>
        <nav className='navbar'>
            <button type="button" className="db-btn" >Dashboard</button>
        </nav>
        <div className='chart-container'>
            <div className='linechart-container'>
                <div className="chart-heading">
                    <h1>Sales vs Orders</h1>
                    <CiCircleInfo className="iconInfo" />
                </div>
                <hr className="hr-line"/>
                <div className='linechart'>
                    <SalesOrdersChart />
                </div>
            </div>
            <div className='piechart-container'>
                <div className="chart-heading">
                    <h1>Portion of Sales</h1>
                    <CiCircleInfo className="iconInfo" />
                </div>
                <hr className="hr-line"/>
                <div className="piechart">
                    <SalespieChart />
                </div>
            </div>
        </div>

    </div>
)}

export default Dashboard