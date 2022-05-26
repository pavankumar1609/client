import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { smMobile, mobile } from "../responsive";

function Navbar() {
  const quantity = useSelector((state) => state.cart?.quantity);
  const user = useSelector((state) => state.user?.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <StyledLink style={{ color: "black" }} to="/">
              E-COMMERCE
            </StyledLink>
          </Logo>
        </Left>
        <Right>
          {!user?.username && (
            <React.Fragment>
              <MenuItem>
                <StyledLink to="/login">SIGN IN</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/register">REGISTER</StyledLink>
              </MenuItem>
            </React.Fragment>
          )}
          {user?.username && (
            <React.Fragment>
              <MenuItem>
                <p>{user.username}</p>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/logout">Logout</StyledLink>
              </MenuItem>
            </React.Fragment>
          )}
          {user && (
            <MenuItem style={{ textAlign: "center" }}>
              <StyledLink to="/orders">My Orders</StyledLink>
            </MenuItem>
          )}
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <Cart />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px", textAlign: "center" })}
  ${smMobile({ fontSize: "15px", textAlign: "center" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${smMobile({ fontSize: "11px" })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Cart = styled(ShoppingCartOutlinedIcon)`
  ${smMobile({ fontSize: "18px" })}
`;
