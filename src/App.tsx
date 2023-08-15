import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {


  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
