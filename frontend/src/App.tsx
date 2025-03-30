import React from 'react';
import MintTicket from './components/MintTicket';
import Header from './layout/Header';
import { Provider } from 'react-redux';
import store  from './store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </div>
  );
};

export default App;
