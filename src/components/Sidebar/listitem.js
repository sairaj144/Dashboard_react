import './index.css'

const ListItem=(props)=>{
    const {eachItem} =props
    const {title}=eachItem
    return(
        <li className='listitem'>
            {title}
        </li>
    )
}

export default ListItem