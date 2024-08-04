import './index.css'
import {v4 as uuidv4} from 'uuid'
import Listitem from './listitem.js'

import Dropitem from './dropitem.js'

const sidebarList= [{id: uuidv4(), title:"Dashboard"},
    {id: uuidv4(), title:"Inventory"},
    {id: uuidv4(), title:"Order"},
    {id: uuidv4(), title:"Returns"},
    {id: uuidv4(), title:"Customers"},
    {id: uuidv4(), title:"Channel"},
    {id: uuidv4(), title:"Integrations"}]
const dropdownList=[
    {id:uuidv4(),title:'Calculators'},
    {id:uuidv4(),title:'Reports'},
    {id:uuidv4(),title:'Account'},
]


const Sidebar=()=>{
    return(
    <div className='sidebar-container'>
        <ul>
            {sidebarList.map(eachItem=> <Listitem key={eachItem.id} eachItem={eachItem}/> )}
            {dropdownList.map(eachItem=> <Dropitem key={eachItem.id} eachItem={eachItem}/> )}
        </ul>
    </div>
)}

export default Sidebar