import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
export const PaymentFormContainer =styled.div`
    height:300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:800px){
        height : 150px;

    }
`

export const FormContainer = styled.form`
    height:100px;
    width:500px;
    @media screen and (max-width:800px){
        width: 100vw;
        height : 70px;
        padding :0 5%;
    }
`
export const  PaymentButton = styled(CustomButton)`
    margin-left:auto;
    margin-top:30px;
    @media screen and (max-width:800px){
        margin :25px auto 0;
    }
`
