import React, {Component} from 'react';
import Atendimento from './componentes/Home';
import Detalhe from './componentes/Detalhe';
import {Router,Route,browserHistory} from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={Atendimento} />
          <Route path="/detalhe" component={Detalhe} />
      </Router>
    );
  }
}

export default App;
