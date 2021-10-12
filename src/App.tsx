import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './Store';
import Main from './Screens/Main';

function App() {
  useEffect(()=>{

  },[])
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
