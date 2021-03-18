import './App.css';
import Order from './Containers/Order/Order';
// import Payment from './Containers/Payment/Payment';
import Breakdown from './Containers/Breakdown/Breakdown';

function App() {
  return (
    <div className="App">
      <Order />
      {/* <Payment /> */}
      <Breakdown />
    </div>
  );
}
  
export default App;
