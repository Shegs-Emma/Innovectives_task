import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from "./Containers/Landing";
import DeviceCat from './Containers/DeviceCat';
import Purchased from './Containers/Purchased';

function App() {
  let routes = (
    <Switch>
      <Route path="/purchase" component={Purchased} />
      <Route path="/cat" component={DeviceCat} />
      <Route path="/" exact component={Landing} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      {routes}
    </div>
  );
}
  
export default App;
