import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import BannerSection from './Component/bannerSection';
import CategorySection from './Component/categorySection';
import CheckoutPage from './Component/checkoutPage';
import ContactSection from './Component/contactSection';
import DealSection from './Component/dealSection';
import FooterSection from './Component/footerSection';
import HomeSection from './Component/homeSection';
import LoginPage from './Component/loginPage';
import Navbar from './Component/navbar';
import NewsletterSection from './Component/newsLetterSection';
import ProductSection from './Component/productSection';
import RegisterPage from './Component/registerPage';

function App() {
  return (
    <div className="App">

          
      <div className="App">
  

        {/* Set up your routes */}
        <Router>
        <Routes>
        
          <Route path="/Login" exact component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/checkout" component={CheckoutPage} />
        
        </Routes>
        </Router>
      </div>
  
      <Navbar />
      <HomeSection/>
      <BannerSection />
      <CategorySection />
      <ProductSection />
      <DealSection/>
      <ContactSection/>
      <NewsletterSection/>
      <FooterSection/>

    </div>
  );
}

export default App;
