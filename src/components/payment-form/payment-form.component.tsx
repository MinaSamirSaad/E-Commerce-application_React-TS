import { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer,PaymentButton } from "./payment-form.styles";
import {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/custom-button.component";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment,setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements || !amount) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/api/create-payment-intent", {
    method: 'post',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;
    const cardDetails = elements.getElement(CardElement);
    if (cardDetails===null)return;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setIsProcessingPayment(false); 
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment :</h2>
        <CardElement />
       
        <PaymentButton   isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay now
        </PaymentButton>

      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
