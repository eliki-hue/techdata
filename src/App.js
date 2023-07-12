import './App.css';
import Navbar from './components/navbar/Navbar';
import Introduction from './components/introduction/introduction';
import Mission from './components/MissionSection/Mission'; 
import Services from './components/Services/Services';
import Carousel from './components/partners/Partners';
import CarouselCustomer from './components/customers/CarouselCustomer';
import Customers from './components/customers/Customers';
import ServicesCards from './components/Services/ServicesCards';
import About from './components/About/About';
import Contact from './components/Footer/Contact';
import { HashScroll } from "react-hash-scroll";

function App() {
  return (
    <div className="App">
      {/* <div style={{height:90}}></div> */}
     <Navbar/>
      <Introduction/>
      <Mission/><br/>
      <About
      /><br/>
      <ServicesCards/>
      <Carousel/>
      {/* <Customers/> */}
      <Contact/>
    </div>
  );
}

export default App;
