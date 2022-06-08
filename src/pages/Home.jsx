import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
