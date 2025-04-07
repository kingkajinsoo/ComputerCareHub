import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/UI/ContactForm';
import AnimatedSection from '../components/UI/AnimatedSection';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Contact: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <title>문의하기 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터에 컴퓨터 수리, 렌탈, 견적 등 다양한 문의를 해보세요. 신속하고 정확한 답변을 드립니다." />
        <meta name="keywords" content="컴퓨터 수리 문의, 견적 요청, 컴퓨터 렌탈 문의, 다나와 행신센터 연락처, 출장 수리 예약" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        {!isMobile && (
          <>
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
          </>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-blue-500">문의</span>하기
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              컴퓨터 관련 문제가 있으신가요? 다나와 행신센터에 언제든지 문의하세요.
              전문적인 상담과 해결책을 제공해 드립니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold text-white mb-6">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">전화번호</h3>
                      <p className="text-gray-300">031-000-0000</p>
                      <p className="text-blue-400 mt-1">24시간 긴급 출장 가능</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">이메일</h3>
                      <p className="text-gray-300">info@danawa-haengsin.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">주소</h3>
                      <p className="text-gray-300">경기도 고양시 덕양구 행신동 000번지</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">영업시간</h3>
                      <p className="text-gray-300">평일: 09:00 - 18:00</p>
                      <p className="text-gray-300">토요일: 09:00 - 15:00</p>
                      <p className="text-gray-300">일요일 및 공휴일: 휴무</p>
                      <p className="text-blue-400 mt-1">* 긴급 출장 서비스는 24시간 연중무휴</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">SNS</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.7 22.3H4.3A2.31 2.31 0 012 20V4a2.31 2.31 0 012.3-2.3h15.4A2.31 2.31 0 0122 4v16a2.31 2.31 0 01-2.3 2.3zM8.3 10.2H5.5v8.3h2.8v-8.3zm.1-3.3a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0zm11.1 11.6h-2.8v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5h-2.8v-8.3h2.7v1.2h.1a3 3 0 012.7-1.5c2.9 0 3.4 1.9 3.4 4.3v4.3z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              자주 묻는 <span className="text-blue-500">질문</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              고객님들이 자주 문의하시는 질문들을 모았습니다.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "출장 수리는 얼마나 걸리나요?",
                answer: "문제의 종류와 복잡성에 따라 다르지만, 일반적으로 1~2시간 내에 대부분의 문제를 해결해 드립니다. 복잡한 수리의 경우 사전에 예상 시간을 안내해 드립니다."
              },
              {
                question: "수리 비용은 어떻게 책정되나요?",
                answer: "다나와 행신센터는 투명한 정찰제를 운영합니다. 진단 후 정확한 견적을 제시해 드리며, 고객 동의 없이 추가 비용이 발생하지 않습니다. 기본 출장비 + 수리비용으로 구성되며, 부품 교체가 필요한 경우 부품 비용이 추가됩니다."
              },
              {
                question: "컴퓨터 렌탈은 어떤 절차로 진행되나요?",
                answer: "전화나 이메일로 필요한 사양과 기간을 알려주시면 맞춤형 견적을 제공해 드립니다. 계약 체결 후 원하시는 장소로 배송 및 설치해 드리며, 필요한 소프트웨어도 함께 세팅해 드립니다. 렌탈 기간 중 기술 지원도 무료로 제공됩니다."
              },
              {
                question: "수리 후 보증 기간은 얼마인가요?",
                answer: "모든 수리는 3개월 무상 A/S를 기본으로 제공합니다. 부품 교체의 경우 해당 부품의 제조사 보증 기간을 그대로 적용받으며, 설치 및 조립 오류에 대해서는 6개월간 무상 A/S를 제공합니다."
              },
              {
                question: "긴급한 컴퓨터 문제가 발생했을 때 얼마나 빨리 방문 가능한가요?",
                answer: "긴급 출장 서비스는 평균 30분 이내 출동을 원칙으로 합니다. 위치와 교통 상황에 따라 다를 수 있으나, 최대한 신속하게 방문하여 문제를 해결해 드립니다. 24시간 연중무휴로 운영되어 야간이나 주말, 공휴일에도 서비스 이용이 가능합니다."
              }
            ].map((faq, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="mb-4"
              >
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
