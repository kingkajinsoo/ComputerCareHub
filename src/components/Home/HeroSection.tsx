import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { useMediaQuery } from '../../hooks/useMediaQuery';

// 이미지 import
import technicianImage from '../../assets/images/Professional Korean computer technician 2.png';
import circuitImage from '../../assets/images/Close-up of advanced computer circuit board.png';

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Background gradients and effects
  const gradientStyle = {
    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 px-4 pt-16">
      {/* Animated background gradients */}
      <div
        className="absolute inset-0 z-0"
        style={gradientStyle}
      />
      
      {/* Circuit board background pattern - more tech-oriented than a simple grid */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={circuitImage} 
                alt="Circuit Background" 
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/95" />
          </div>
        </div>
      )}
      
      {/* Floating elements for desktop */}
      {!isMobile && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
            className="absolute top-[20%] right-[20%] w-16 h-16 rounded-full bg-blue-600/30 blur-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.25, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
            className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-full bg-blue-600/20 blur-lg"
          />
        </>
      )}
      
      {/* Main content */}
      <div className="container mx-auto z-10 pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content - Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                24시간 긴급 컴퓨터 출장 수리
              </div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              <span className="text-blue-500">신속</span>하고 <span className="text-blue-500">정확</span>한 <br />
              컴퓨터 수리 서비스
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-10"
            >
              다나와 행신센터는 10년 이상의 노하우로 <br className="hidden md:block" />
              정직한 가격과 투명한 서비스를 제공합니다.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button to="/contact" size="lg" variant="primary">
                지금 상담하기
              </Button>
              <Button to="/services" size="lg" variant="outline">
                서비스 둘러보기
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Technician Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Main image - Computer Technician */}
              <motion.div
                className="w-full h-[500px] overflow-hidden rounded-xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {isMobile ? (
                  <img 
                    src={technicianImage} 
                    alt="컴퓨터 수리 전문가" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.img 
                    src={technicianImage} 
                    alt="컴퓨터 수리 전문가" 
                    className="w-full h-full object-cover transform-gpu"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                  />
                )}
              </motion.div>
              
              {/* Tech-inspired animated effect behind the image - only shown on desktop */}
              {!isMobile && (
                <div className="absolute inset-0 -z-10">
                  <motion.div 
                    className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </div>
              )}
              
              {/* Digital circuit-inspired border effect */}
              {isMobile ? (
                <div className="absolute inset-0 rounded-xl border-2 border-blue-500/40" />
              ) : (
                <motion.div 
                  className="absolute inset-0 rounded-xl border-2 border-blue-500/60 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Animated corner highlights to simulate circuit patterns */}
                  <motion.div 
                    className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-400 rounded-tl-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-400 rounded-tr-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-400 rounded-bl-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-400 rounded-br-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Key features */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "빠른 출장 서비스",
              description: "당일 방문 가능, 30분 이내 출동",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "투명한 가격",
              description: "정찰제 운영, 숨겨진 비용 없음",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              title: "품질 보증",
              description: "수리 후 3개월 무상 A/S 제공",
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 transform hover:translate-y-[-5px] transition-transform border border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Scroll down indicator */}
        {!isMobile && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
