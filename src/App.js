import React from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import Routes from './router';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
