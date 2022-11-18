import './App.css';
import SearchBox from './sections/SearchBox';
import ForeCast from './sections/Forecast';
import { Provider } from 'react-redux';
import store from './app/store';

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
