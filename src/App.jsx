import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import ClosingSection from "./components/closingSection/ClosingSection";
import Footer from "./components/footer/Footer";
import Info from "./components/info/info";
import NavBar from "./components/navbar/NavBar";
import Products from "./components/products/Products";
import RatingSection from "./components/rating/RatingSection";

function App() {
   const [carts, setCarts] = useState([]);
   return (
      <>
         <NavBar></NavBar>
         <Banner></Banner>
         <RatingSection></RatingSection>
         <Products carts={carts} setCarts={setCarts}></Products>
         <Info></Info>
         <ClosingSection></ClosingSection>
         <Footer></Footer>
      </>
   );
}

export default App;
