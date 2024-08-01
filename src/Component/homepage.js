import React from 'react';
import BannerSection from './bannerSection';
import CategorySection from './categorySection';
import ContactSection from './contactSection';
import DealSection from './dealSection';
import FooterSection from './footerSection';
import Layout from './layout';
import NewsletterSection from './newsLetterSection';
import ProductSection from './productSection';

const Homepage = () => {
  return (
    <div>
     <Layout/>
     

      <BannerSection />
      <CategorySection />
      <ProductSection />
      <DealSection />
      <ContactSection />
      <NewsletterSection />
      <FooterSection />
    
    </div>
  )
}

export default Homepage;