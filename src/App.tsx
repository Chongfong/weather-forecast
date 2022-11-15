import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <form>
            <SearchBox />
          </form>
        </header>
      </div>
    </Provider>
  );
}

export default App;
