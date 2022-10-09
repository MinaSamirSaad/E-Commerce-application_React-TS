import "./menu-item.styles.scss"
import {  useNavigate} from 'react-router-dom';
const MenuItem = ({title,imageUrl,size}) => {
  const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`/shop/${title}`)}
        className={`${size} menu-item`}>
            <div className="backgroundImage"  style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
            
        </div>
    )
}
export default MenuItem