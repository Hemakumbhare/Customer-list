import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import AllCustomer from './Components/AllCustomer.jsx'
import AddCustomer from './Components/AddCustomer.jsx'
import EditCustomer from './Components/EditCustomer.jsx'
import ShowCustomer from './Components/ShowCustomer'
import NotFound from './Components/NotFound.jsx'



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={AllCustomer}/>
      <Route exact path="/add" component={AddCustomer}/>
      <Route exact path="/edit/:id" component={EditCustomer}/>
      <Route exact path="/show/:id" component={ShowCustomer}/>
      <Route component={NotFound}/>

      </Switch>
      </BrowserRouter>
  );
}

export default App;
