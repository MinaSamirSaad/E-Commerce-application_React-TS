import styled from "styled-components";
export const ProductName = styled.span`
width: 90%;
margin-bottom: 15px;
`
export const ProductPrice = styled.span`
width: 10%;
`
export const CollectionFooter = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
`
export const CollectionItem = styled.div`
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

img {
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
}
button {
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
}

&:hover {
  img {
    opacity: 0.8;
  }

  button {
    opacity: 0.85;
    display: flex;
  }
}
`
