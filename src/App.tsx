import { Provider } from 'react-redux';
import './App.css';
import FindVueloComponent from './components/findVuelo/FindVueloComponent';
import NavComponent from './components/navbar/NavComponent';
import AppRouter from './routes/AppRouter';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter/>
      </Provider>
        
    </div>
  );
}

export default App;
