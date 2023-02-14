import {MenuItemContainer,BackgroundImage,Content} from "./menu-item.styles"
import {  useNavigate} from 'react-router-dom';
import { FC } from 'react';

export type MenuItemProps ={
    title:string;
    imageUrl:string;
}
const MenuItem:FC<MenuItemProps> = ({title,imageUrl}) => {
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