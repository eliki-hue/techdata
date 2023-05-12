import './App.css';
import Introduction from './components/introduction/introduction';
import Mission from './components/MissionSection/Mission'; 
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      {/* <div style={{height:90}}></div> */}
      <Introduction/>
      <Mission/><br/>
      <Services/><br/>
    </div>
  );
}

export default App;
