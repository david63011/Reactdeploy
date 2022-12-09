import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import store from './Redux/ConfigureStore';
import Main from './Pages/Main';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
