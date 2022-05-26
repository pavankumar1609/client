import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function Products({ cat, filters, sort, search }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (search)
      setFilteredProducts(
        products.filter((p) =>
          p.title.toLowerCase().startsWith(search.toLowerCase())
        )
      );
    if (!search) setFilteredProducts(products);
  }, [search, products]);

  useEffect(() => {
    if (sort === "newest")
      setFilteredProducts((prev) =>
        [...prev].sort((b, a) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    else if (sort === "asc")
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    else
      setFilteredProducts((prev) =>
        [...prev].sort((b, a) => a.price - b.price)
      );
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
