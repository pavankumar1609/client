import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { mobile, smMobile } from "../responsive";

function Orders() {
  const user = useSelector((state) => state.user?.currentUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`/orders/find/${user._id}`);
        if (res.status === 200) setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    user && getOrders();
  }, [user?._id, user]);

  if (orders.length === 0)
    return (
      <React.Fragment>
        <ButtonContainer style={{ margin: 20, fontSize: 30 }}>
          There are no orders yet.
        </ButtonContainer>
        <ButtonContainer>
          <Button style={{ padding: 10, margin: 20 }}>
            <ButtonLink to="/">Go to Homepage</ButtonLink>
          </Button>
        </ButtonContainer>
      </React.Fragment>
    );

  if (orders.length === 1)
    return (
      <Container>
        <Info>
          {orders[0].products.map((product) => (
            <Product key={product._id + Math.random()}>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <span style={{ fontSize: 20 }}>QTY: </span>
                  <ProductAmount>{product.quantity}</ProductAmount>
                </ProductAmountContainer>
                <ProductPrice>₹ {product.totalPrice}</ProductPrice>
                <DateSummary>
                  {orders.length > 0 &&
                    new Date(orders[0].createdAt).toDateString()}
                </DateSummary>
              </PriceDetail>
            </Product>
          ))}
          <Hr />
        </Info>
        <ButtonContainer>
          <Button style={{ padding: 10, margin: 20 }}>
            <ButtonLink to="/">Go to Homepage</ButtonLink>
          </Button>
        </ButtonContainer>
      </Container>
    );

  return (
    <Container>
      <Info>
        {orders.map((item) =>
          item.products.map((product) => (
            <Product key={product._id + Math.random()}>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <span style={{ fontSize: 20 }}>QTY: </span>
                  <ProductAmount>{product.quantity}</ProductAmount>
                </ProductAmountContainer>
                <ProductPrice>₹ {product.totalPrice}</ProductPrice>
                <DateSummary>
                  {orders.length > 0 && new Date(item.createdAt).toDateString()}
                </DateSummary>
              </PriceDetail>
            </Product>
          ))
        )}
        <Hr />
      </Info>
      <ButtonContainer>
        <Button style={{ padding: 10, margin: 20 }}>
          <ButtonLink to="/">Go to Homepage</ButtonLink>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Orders;

const Container = styled.div``;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "130px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${smMobile({ fontSize: "12px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const DateSummary = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Button = styled.button`
  background-color: violet;
  border: none;
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
