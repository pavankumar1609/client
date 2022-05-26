import styled from "@emotion/styled";

function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over ₹500</Container>;
}

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: #0b9e9e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
