import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '../UI/PortfolioCard';
import AnimatedSection from '../UI/AnimatedSection';
import Button from '../UI/Button';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const FeaturedPortfolio: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const portfolioItems = [
    {
      title: "그래픽카드 고장 수리",
      description: "오버클럭으로 인한 그래픽카드 손상 복구 및 팬 교체 작업",
      category: "하드웨어 수리",
      imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "랜섬웨어 제거 및 데이터 복구",
      description: "악성 랜섬웨어 제거 및 중요 파일 복구 작업",
      category: "소프트웨어 수리",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "사무실 PC 10대 정기 점검",
      description: "중소기업 사무실 컴퓨터 정기 유지보수 및 성능 최적화",
      category: "기업 서비스",
      imageUrl: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Different animations for desktop and mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements for desktop */}
      {!isMobile && (
        <>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            최근 <span className="text-blue-500">수리 사례</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            다나와 행신센터에서 최근에 수행한 다양한 컴퓨터 수리 및 서비스 사례를 확인하세요.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <PortfolioCard
                title={item.title}
                description={item.description}
                category={item.category}
                imageUrl={item.imageUrl}
              />
            </AnimatedSection>
          ))}
        </motion.div>

        <AnimatedSection className="text-center">
          <Button to="/portfolio" size="lg">
            모든 사례 보기
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
