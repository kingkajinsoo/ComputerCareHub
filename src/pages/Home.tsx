import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/Home/HeroSection';
import ServicesPreview from '../components/Home/ServicesPreview';
import FeaturedPortfolio from '../components/Home/FeaturedPortfolio';
import TestimonialSection from '../components/Home/TestimonialSection';
import CTASection from '../components/Home/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>다나와 행신센터 - 컴퓨터 출장 수리 및 렌탈 전문</title>
        <meta name="description" content="고양시 행신동 다나와 행신센터에서 전문적인 컴퓨터 출장 수리와 렌탈 서비스를 제공합니다. 긴급 출장 서비스 및 투명한 가격 정책으로 신속하고 정확한 서비스를 약속합니다." />
        <meta name="keywords" content="컴퓨터 수리, 출장 수리, 컴퓨터 렌탈, 고양시 컴퓨터 수리, 행신동 컴퓨터 수리, PC 수리" />
      </Helmet>
      
      <HeroSection />
      <ServicesPreview />
      <FeaturedPortfolio />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default Home;
