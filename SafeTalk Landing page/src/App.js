import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <BrowserRouter>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Home/>
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
            </Routes>
          <Footer />
      </BrowserRouter>
        
    
  );
}

export default App;
