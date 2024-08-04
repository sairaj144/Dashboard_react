import './index.css'

const Dropitem=(props)=>{
const {eachItem}=props
const {title}=eachItem

return(
    <li>
        <select className='dropitem' name={title}>
            <option value={title}>{title}</option>
        </select>
    </li>
)
}

export default Dropitem