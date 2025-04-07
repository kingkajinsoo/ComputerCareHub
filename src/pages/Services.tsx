import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/UI/AnimatedSection';
import ServiceCard from '../components/UI/ServiceCard';
import Button from '../components/UI/Button';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Services: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

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
      features: ["부품별 정밀 진단", "솔루션 제안", "데이터 보존", "오류 해결"],
      serviceType: "hardware"
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
      features: ["윈도우 설치", "드라이버 업데이트", "최적화", "백업 및 복구"],
      serviceType: "software"
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
      features: ["긴급 복구", "파일 복원", "안전한 백업", "저장 장치 복구"],
      serviceType: "data-recovery"
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
      features: ["LCD 교체", "키보드 수리", "발열 해결", "배터리 교체"],
      serviceType: "laptop"
    },
    {
      title: "업그레이드 및 최적화",
      description: "더 빠른 성능을 위한 하드웨어 업그레이드 및 시스템 최적화",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      price: "30,000원~",
      features: ["하드웨어 업그레이드", "성능 최적화", "속도 향상", "프로그램 정리"],
      serviceType: "upgrade"
    },
    {
      title: "네트워크 문제 해결",
      description: "인터넷 연결 문제, 와이파이 설정, 네트워크 기기 설치 및 구성",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      price: "40,000원~",
      features: ["와이파이 설정", "공유기 설치", "네트워크 최적화", "보안 설정"],
      serviceType: "network"
    },
    {
      title: "컴퓨터 렌탈",
      description: "행사, 교육, 임시 사무실 등을 위한 데스크톱 및 노트북 렌탈 서비스",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      price: "일 30,000원~",
      features: ["단기/장기 렌탈", "소프트웨어 포함", "기술 지원", "무료 배송"],
      serviceType: "rental"
    },
    {
      title: "유지보수 계약",
      description: "기업 및 소상공인을 위한 정기적인 컴퓨터 관리 및 유지보수 서비스",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      price: "월 100,000원~",
      features: ["정기 점검", "우선 처리", "원격 지원", "장애 예방"],
      serviceType: "maintenance"
    }
  ];

  const emergencyService = {
    title: "24시간 긴급 출장 서비스",
    description: "언제 어디서나 발생할 수 있는 컴퓨터 긴급 상황에 대응하는 신속한 출장 서비스입니다. 평균 30분 이내 현장 도착을 목표로 하며, 어떤 시간에도 대응 가능합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    price: "70,000원~",
    features: ["24시간 대응", "30분 이내 도착", "야간/공휴일 가능", "긴급 해결책"],
    serviceType: "emergency"
  };

  return (
    <>
      <Helmet>
        <title>서비스 소개 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 컴퓨터 수리 및 렌탈 서비스를 소개합니다. 하드웨어 수리, 소프트웨어 문제 해결, 데이터 복구, 업그레이드 등 다양한 서비스를 제공합니다." />
        <meta name="keywords" content="컴퓨터 수리, 데이터 복구, 노트북 수리, 하드웨어 수리, 소프트웨어 설치, 컴퓨터 렌탈, 네트워크 설정" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        {/* Background gradients for desktop */}
        {!isMobile && (
          <>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-3xl"></div>
          </>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              전문적인 <span className="text-blue-500">컴퓨터 수리</span> 서비스
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              다나와 행신센터는 하드웨어, 소프트웨어, 네트워크 등 모든 종류의 컴퓨터 문제에 대한 전문적인 해결책을 제공합니다. 10년 이상의 경험과 기술로 신속하고 정확한 서비스를 약속합니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact?service=quote" size="lg" variant="primary">
                견적 문의하기
              </Button>
              <Button href="tel:031-000-0000" size="lg" variant="outline" icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }>
                전화 상담
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-4">{emergencyService.title}</h2>
                <p className="text-lg text-gray-300 mb-6">{emergencyService.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {emergencyService.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button to="/contact?service=emergency" variant="primary">긴급 출장 요청</Button>
                  <Button href="tel:031-000-0000" variant="outline">바로 전화하기</Button>
                </div>
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-900/30 rounded-2xl p-6 border border-blue-800/30"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {emergencyService.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">긴급 출장 수리</h3>
                    <div className="text-3xl font-bold text-white mb-2">{emergencyService.price}</div>
                    <p className="text-gray-400 text-sm mb-4">심야, 주말, 공휴일 포함</p>
                    <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                      평균 30분 내 도착
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Regular Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-blue-500">다양한</span> 서비스
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              노트북, 데스크탑, 서버 등 모든 컴퓨터 관련 문제를 해결해 드립니다.
              다나와 행신센터에서 제공하는 다양한 서비스를 확인하세요.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  price={service.price}
                  features={service.features}
                  serviceType={service.serviceType}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-blue-500">서비스</span> 진행 과정
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              다나와 행신센터의 체계적인 서비스 프로세스로 신속하고 정확한 해결을 경험하세요.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "문의 및 상담",
                description: "전화, 온라인으로 문제 상황을 상담합니다. 가능한 솔루션과 예상 비용을 안내해 드립니다.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "진단 및 견적",
                description: "정확한 문제 진단을 통해 상세한 수리 계획과 견적을 제시합니다. 투명한 가격 정책으로 숨겨진 비용이 없습니다.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "수리 진행",
                description: "고객 동의 후 수리를 진행합니다. 필요한 경우 중간 상황을 공유하며, 추가 발생 비용이 있을 경우 먼저 상담합니다.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "완료 및 보증",
                description: "수리 완료 후 테스트와 확인 과정을 거쳐 인계합니다. 모든 수리는 3개월 무상 A/S가 기본으로 제공됩니다.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="relative"
              >
                <div className="bg-gray-900 rounded-xl p-6 h-full border border-gray-700/50 relative">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  {index < 3 && !isMobile && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                  <div className="mt-4 mb-4 text-blue-500">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-gradient-to-r from-blue-900/30 to-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">지금 바로 문의하세요</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              다나와 행신센터는 합리적인 가격과 전문적인 기술로 여러분의 컴퓨터 문제를 해결해 드립니다.
              지금 바로 견적을 요청하세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact?service=quote" size="lg" variant="primary">
                견적 요청하기
              </Button>
              <Button href="tel:031-000-0000" size="lg" variant="outline">
                전화 상담
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
