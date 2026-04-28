import "./App.css";
import Banner from "./components/banner/Banner";
import ClosingSection from "./components/closingSection/ClosingSection";
import Info from "./components/info/info";
import NavBar from "./components/navbar/NavBar";
import RatingSection from "./components/rating/RatingSection";

function App() {
   return (
      <>
         <NavBar></NavBar>
         <Banner></Banner>
         <RatingSection></RatingSection>
         <Info></Info>
         <ClosingSection></ClosingSection>
      </>
   );
}

export default App;
