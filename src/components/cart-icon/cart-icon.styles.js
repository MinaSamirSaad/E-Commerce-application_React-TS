import styled from "styled-components";
import { ReactComponent as ShoppongIcon } from "../../assets/111 shopping-bag.svg"

export const CartIconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
user-select:none;
`
export const ShopingIcon = styled(ShoppongIcon)`
width: 24px;
height: 24px;
`
export const ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
`
