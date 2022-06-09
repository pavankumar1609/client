import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PayButton from "./PayButton";
import { removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { mobile, smMobile, lgMobile, tablet } from "../responsive";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user?.currentUser);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <Container>
      <Navbar />
      {!cart.quantity && (
        <Wrapper>
          <EmptyCart>
            <Title>Shopping Cart</Title>
            <p>Your cart is currently empty.</p>
            <NavLink to="/" style={{ color: "black" }}>
              ← Start Shopping
            </NavLink>
          </EmptyCart>
        </Wrapper>
      )}
      {!!cart.quantity && (
        <Wrapper>
          <Title style={{ marginBottom: 20 }}>SHOPPING CART</Title>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
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
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                    <DeleteButton onClick={() => handleDelete(product)}>
                      Delete
                    </DeleteButton>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
              <OrderContainer>
                <Top>
                  <TopButton>
                    <NavLink style={{ color: "black" }} to="/">
                      CONTINUE SHOPPING
                    </NavLink>
                  </TopButton>
                </Top>
                <Summary>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <TaxSummary>
                    Taxes and shipping calculated at checkout
                  </TaxSummary>
                  {user ? (
                    !!cart.quantity && <PayButton cartItems={cart.products} />
                  ) : (
                    <Button>
                      <NavLink to="/login">Login to Check Out</NavLink>
                    </Button>
                  )}
                </Summary>
              </OrderContainer>
            </Info>
          </Bottom>
        </Wrapper>
      )}
      <Hr />
      <Footer />
    </Container>
  );
}

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 400;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${smMobile({ padding: "5px", fontSize: "12px" })}
`;

const EmptyCart = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    margin: 20px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${lgMobile({ flexDirection: "column" })}
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
  align-items: flex-end;
  justify-content: center;
  margin-right: 30px;
  ${lgMobile({ alignItems: "center", fontSize: "10px" })}
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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div``;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const TaxSummary = styled.div`
  margin-bottom: 10px;
`;

const SummaryItemText = styled.span`
  font-size: 30px;
`;

const SummaryItemPrice = styled.span`
  font-size: 30px;
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 30px;
  ${lgMobile({ flexDirection: "column" })}
`;

const DeleteButton = styled.button`
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: red;
  color: white;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
