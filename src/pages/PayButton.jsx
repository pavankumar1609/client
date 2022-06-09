import React from "react";
import styled from "@emotion/styled";
import { publicRequest } from "../requestMethods";

function PayButton({ cartItems }) {
  const handleCheckout = async () => {
    try {
      const res = await publicRequest.post(`/stripe/create-checkout-session`, {
        cartItems,
      });
      if (res.data.url) window.location.href = res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onClick={handleCheckout}>Check Out</Button>;
}

export default PayButton;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
`;
