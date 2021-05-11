import Home from './Home';
import Sobre from './Sobre';
import Error from './Error';

import {BrowserRouter,Route, Switch} from 'react-router-dom';

const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sobre" component={Sobre}/>
        <Route path="*" component={Error}/>
      </Switch>
    </BrowserRouter> 
  )

}

export default Routes;