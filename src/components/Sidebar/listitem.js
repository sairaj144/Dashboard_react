import { Link } from 'react-router-dom';
import './index.css'

const ListItem=(props)=>{
    const {eachItem,isActive,clickTabItem} =props
    const {id,title}=eachItem

    const onClickTabItem = () => {
        clickTabItem(id)
      }

    const activeListItem = isActive ? 'active-tab-btn' : ''

    return(
        <Link to={`/${title}`} className="list-btn" onClick={onClickTabItem}>
                <li className={`listitem ${activeListItem}`}>
                    {title}   
                </li>
        </Link>
    )
}

export default ListItem