import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import Listitem from './listitem.js'
import { GiHamburgerMenu } from "react-icons/gi";
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



class Sidebar extends Component {
    state = {
        activeid: '',
        isClicked: true,
    }

    clickTabItem = tabValue => {
        this.setState({activeid: tabValue})
    }


     toggleMenu=()=>{
        
            this.setState(prevState => ({isClicked: !prevState.isClicked}))
          
    }

  

    render(){
        const {activeid, isClicked} = this.state
const viewsidebar= isClicked? "show":"hide"
        console.log(activeid, isClicked)
        return(
        <div className='sidebar-container'>
            <div>
                <GiHamburgerMenu className='menu-icon' onClick={this.toggleMenu} />
            </div>
            <ul className={`menuitems ${viewsidebar}`} >
                {sidebarList.map(eachItem=> <Listitem key={eachItem.id} 
                    eachItem={eachItem} clickTabItem={this.clickTabItem} 
                    isActive={activeid === eachItem.id}/> 
                )}
                {dropdownList.map(eachItem=> <Dropitem key={eachItem.id} eachItem={eachItem}/> )}
            </ul>
        </div>
        
    )}
}

    

export default Sidebar