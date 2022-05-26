import { useState } from "react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

function CheckoutSuccess() {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      cart.products.map((item) => ({
        productId: item._id,
        title: item.title,
        desc: item.desc,
        img: item.img,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.quantity * item.price,
      }))
    );
  }, [cart.products]);

  useEffect(() => {
    const createOrder = async () => {
      try {
        await userRequest.post("/orders/", {
          userId: currentUser._id,
          products,
          total: cart.total,
          status: "completed",
        });
      } catch (error) {
        console.log(error);
      }
    };

    products.length > 0 && createOrder();
  }, [cart.total, currentUser._id, products]);

  return (
    <Container>
      <div>Payment Successfull</div>
      <Button style={{ padding: 10, marginTop: 20 }}>
        <ButtonLink to="/">Go to Homepage</ButtonLink>
      </Button>
    </Container>
  );
}

export default CheckoutSuccess;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Button = styled.button`
  background-color: violet;
  border: none;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;
