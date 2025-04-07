import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../UI/ServiceCard';
import AnimatedSection from '../UI/AnimatedSection';
import Button from '../UI/Button';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      title: "하드웨어 수리",
      description: "메인보드, 그래픽 카드, 메모리 등 PC 부품의 고장 진단 및 수리 서비스",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      price: "50,000원~",
      features: ["부품별 진단", "솔루션 제안", "데이터 보존", "오류 해결"]
    },
    {
      title: "운영체제 및 소프트웨어",
      description: "윈도우 설치, 최적화, 바이러스 제거, 소프트웨어 문제 해결",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      price: "40,000원~",
      features: ["윈도우 설치", "드라이버 업데이트", "최적화", "백업 및 복구"]
    },
    {
      title: "데이터 복구",
      description: "하드 디스크, SSD, USB 등에서의 데이터 복구 및 백업 서비스",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
      price: "70,000원~",
      features: ["긴급 복구", "파일 복원", "안전한 백업", "저장 장치 복구"]
    },
    {
      title: "노트북 수리",
      description: "노트북 부품 교체, 화면 수리, 키보드 교체, 발열 문제 해결",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      price: "60,000원~",
      features: ["LCD 교체", "키보드 수리", "발열 해결", "배터리 교체"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            전문적인 <span className="text-blue-500">컴퓨터 수리</span> 서비스
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            다나와 행신센터는 모든 종류의 컴퓨터 문제에 대한 해결책을 제공합니다.
            10년 이상의 경험으로 정확한 진단과 빠른 수리를 약속합니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                features={service.features}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button to="/services" size="lg">
              모든 서비스 보기
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesPreview;
