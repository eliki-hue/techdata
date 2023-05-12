import './App.css';
import Introduction from './components/introduction/introduction';
import Mission from './components/MissionSection/Mission'; 

function App() {
  return (
    <div className="App">
      {/* <div style={{height:90}}></div> */}
      <Introduction/>
      <Mission/>
    </div>
  );
}

export default App;
