import styled from "styled-components";

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 70px;
right: 10px;
z-index: 5;
button{
    margin-top:auto;
}
`
export const EmptyMessage = styled.span`
font-size: 16px;
margin: 50px auto;
font-weight:bold;
`
export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: auto;
`
