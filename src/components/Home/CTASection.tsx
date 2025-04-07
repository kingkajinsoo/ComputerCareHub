import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import AnimatedSection from '../UI/AnimatedSection';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const CTASection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-0"></div>
      
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circleGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circleGrid)" />
          </svg>
        </div>
      )}
      
      {/* Floating elements for desktop */}
      {!isMobile && (
        <>
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl z-0"
          />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl z-0"
          />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700">
            <AnimatedSection>
              <div className="text-center mb-8">
                <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  24시간 긴급 출장 서비스
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  컴퓨터 문제로 고민하고 계신가요?
                </h2>
                <p className="text-xl text-gray-300">
                  지금 바로 다나와 행신센터에 문의하세요.<br />
                  빠르고 정확한 해결책을 제공해 드립니다.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">전화 문의</h3>
                      <p className="text-xl font-bold text-blue-400">031-000-0000</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    전화 한 통으로 빠른 상담과 출장 서비스를 요청하세요.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">온라인 예약</h3>
                      <p className="text-gray-300">간편하게 예약하고 할인 혜택 받기</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    온라인으로 방문 일정을 예약하면 10% 할인 혜택을 드립니다.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button to="/contact" size="lg" variant="primary">
                  지금 문의하기
                </Button>
                <Button href="tel:031-000-0000" size="lg" variant="outline" icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }>
                  전화하기
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
