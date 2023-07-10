import './App.css';
import Navbar from './components/navbar/Navbar';
import Introduction from './components/introduction/introduction';
import Mission from './components/MissionSection/Mission'; 
import Services from './components/Services/Services';
import Carousel from './components/partners/Partners';
import CarouselCustomer from './components/customers/CarouselCustomer';
import Customers from './components/customers/Customers';
import ServicesCards from './components/Services/ServicesCards';


function App() {
  return (
    <div className="App">
      {/* <div style={{height:90}}></div> */}
     <Navbar/>
      <Introduction/>
      <Mission/><br/>
      {/* <Services/><br/> */}
      <ServicesCards/>
      <Carousel/>
      {/* <Customers/> */}
      
    </div>
  );
}

export default App;
