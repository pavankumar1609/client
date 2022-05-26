import React from "react";
import styled from "@emotion/styled";

function NotFound() {
  return (
    <Container>
      <h1>404 Error</h1>
      <Message>Page Not Found</Message>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Message = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;
