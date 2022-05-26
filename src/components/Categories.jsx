import styled from "@emotion/styled";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { tablet } from "../responsive";

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${tablet({ padding: "0px", flexDirection: "column" })}
`;
