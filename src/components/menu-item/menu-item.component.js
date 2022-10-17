import {MenuItemContainer,BackgroundImage,Content} from "./menu-item.styles.js"
import {  useNavigate} from 'react-router-dom';
const MenuItem = ({title,imageUrl,size}) => {
  const navigate=useNavigate();

    return (
        <MenuItemContainer onClick={()=>navigate(`/shop/${title}`)}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Content>
                <h1 >{title.toUpperCase()}</h1>
                <span >SHOP NOW</span>
            </Content>
            
        </MenuItemContainer>
    )
}
export default MenuItem