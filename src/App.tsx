import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { Provider } from 'react-redux';
import store from './app/store';
import ForeCast from './components/Forecast';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <SearchBox />
          <ForeCast />
        </header>
      </div>
    </Provider>
  );
}

export default App;
