import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Warranty: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <title>품질 보증 및 A/S - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 수리 품질 보증과 A/S 정책을 안내해 드립니다. 모든 수리는 3개월 무상 A/S를 기본으로 제공합니다." />
        <meta name="keywords" content="컴퓨터 수리 품질보증, A/S 정책, 무상 수리, 보증기간, 컴퓨터 수리 보증" />
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
              품질 <span className="text-blue-500">보증</span> 및 A/S
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              다나와 행신센터는 모든 수리 및 서비스에 대해 품질 보증과 A/S를 제공합니다.
              신뢰할 수 있는 서비스를 경험해 보세요.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Warranty Policy Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-8 border border-gray-700 shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6">기본 품질 보증 정책</h2>
                <p className="text-xl text-gray-300 mb-6">
                  다나와 행신센터는 모든 수리 서비스에 대해 다음과 같은 품질 보증을 제공합니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800/70 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full text-white mr-3">1</span>
                      기본 무상 A/S 보증
                    </h3>
                    <p className="text-gray-300">
                      모든 수리는 <span className="text-blue-400 font-semibold">기본 3개월</span> 무상 A/S를 제공합니다. 동일한 문제가 발생할 경우 무상으로 재수리해 드립니다.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/70 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full text-white mr-3">2</span>
                      부품 교체 보증
                    </h3>
                    <p className="text-gray-300">
                      새 부품으로 교체하는 경우, 해당 부품의 <span className="text-blue-400 font-semibold">제조사 보증</span>이 그대로 적용됩니다. 대부분의 부품은 1년 이상의 보증 기간을 제공합니다.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800/70 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full text-white mr-3">3</span>
                      조립 및 설치 보증
                    </h3>
                    <p className="text-gray-300">
                      PC 조립 및 설치 서비스는 <span className="text-blue-400 font-semibold">6개월</span> 무상 A/S를 제공합니다. 조립 불량으로 인한 모든 문제는 무상으로 해결해 드립니다.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/70 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full text-white mr-3">4</span>
                      소프트웨어 서비스 보증
                    </h3>
                    <p className="text-gray-300">
                      OS 설치, 바이러스 제거 등의 소프트웨어 서비스는 <span className="text-blue-400 font-semibold">1개월</span> 무상 A/S를 제공합니다. 동일 증상 발생 시 무상으로 처리해 드립니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-800/30 mt-8">
                  <h3 className="text-xl font-bold text-white mb-3">프리미엄 보증 서비스</h3>
                  <p className="text-gray-300 mb-4">
                    일반 보증 외에도 추가 보증 서비스를 선택하실 수 있습니다. 프리미엄 보증 서비스는 기본 보증 기간을 최대 1년까지 연장하며, 우선 처리 및 무상 원격 지원 서비스를 포함합니다.
                  </p>
                  <Button to="/contact" variant="outline">
                    프리미엄 보증 문의하기
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-800 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">A/S 절차 안내</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "A/S 접수",
                      description: "전화, 이메일 또는 방문을 통해 A/S를 접수합니다. 수리 내역과 관련 정보를 확인합니다.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                    },
                    {
                      step: "02",
                      title: "문제 확인",
                      description: "기술자가 문제를 확인하고 보증 범위 내인지 판단합니다. 보증 내용에 해당하는 경우 무상 A/S로 진행됩니다.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      ),
                    },
                    {
                      step: "03",
                      title: "A/S 진행",
                      description: "확인된 문제에 대해 A/S를 진행합니다. 추가적인 문제가 발견될 경우 고객님께 연락하여 상담 후 진행합니다.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      ),
                    },
                    {
                      step: "04",
                      title: "완료 및 인계",
                      description: "A/S 완료 후 테스트를 진행하고, 정상 작동을 확인한 후 고객님께 인계합니다. 문제 해결 내용에 대해 상세히 설명해 드립니다.",
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-600/20 p-4 rounded-full mr-4">
                        <div className="text-blue-500">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          <span className="text-blue-400">{item.step}.</span> {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-800 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">보증 제외 사항</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    다음과 같은 경우에는 무상 A/S 보증에서 제외됩니다:
                  </p>
                  
                  <ul className="space-y-3 text-gray-300 list-disc pl-6">
                    <li>사용자의 고의 또는 과실로 인한 손상</li>
                    <li>천재지변(화재, 수해, 낙뢰 등)으로 인한 손상</li>
                    <li>당사에서 수리하지 않은 제품을 임의로 수리 또는 개조한 경우</li>
                    <li>정품이 아닌 부품 사용으로 인한 문제</li>
                    <li>소프트웨어 업데이트 후 발생하는 호환성 문제</li>
                    <li>보증 기간이 만료된 경우</li>
                  </ul>
                  
                  <p className="text-gray-300 mt-4">
                    보증 제외 사항에 해당하더라도, 합리적인 비용으로 수리 서비스를 제공해 드립니다.
                    정확한 진단 후 견적을 안내해 드리며, 고객 동의 후 수리를 진행합니다.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">자주 묻는 질문</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "A/S 접수는 어떻게 하나요?",
                      answer: "전화(031-000-0000) 또는 온라인 문의 페이지를 통해 접수하실 수 있습니다. 구매 내역 또는 이전 수리 내역을 함께 알려주시면 더욱 신속한 처리가 가능합니다."
                    },
                    {
                      question: "출장 수리도 보증이 적용되나요?",
                      answer: "네, 출장 수리도 동일한 보증 정책이 적용됩니다. 다만, 재방문이 필요한 경우 출장비는 별도로 청구될 수 있습니다."
                    },
                    {
                      question: "보증 기간이 지난 경우에는 어떻게 되나요?",
                      answer: "보증 기간이 지난 경우에도 합리적인 비용으로 A/S를 제공해 드립니다. 정확한 진단 후 수리 견적을 안내해 드립니다."
                    },
                    {
                      question: "다른 곳에서 구매한 제품도 수리 가능한가요?",
                      answer: "네, 다른 업체에서 구매한 제품도 수리 가능합니다. 다만, 이 경우에는 당사의 기본 보증 정책이 적용되며, 제조사 보증과는 별도로 진행됩니다."
                    },
                    {
                      question: "수리 중 다른 문제가 발견되면 어떻게 되나요?",
                      answer: "수리 중 추가 문제가 발견될 경우, 즉시 고객님께 연락하여 상황을 설명하고 추가 수리 여부를 결정하실 수 있도록 안내해 드립니다. 고객 동의 없이 추가 비용이 발생하는 수리는 진행하지 않습니다."
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-gray-700/50 rounded-lg p-6"
                    >
                      <h3 className="text-xl font-bold text-white mb-3">Q. {faq.question}</h3>
                      <p className="text-gray-300">A. {faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-gray-800 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">궁금한 점이 있으신가요?</h2>
            <p className="text-xl text-gray-300 mb-8">
              다나와 행신센터의 품질 보증과 A/S에 대해<br />
              더 자세한 상담이 필요하시면 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact?service=premium" size="lg" variant="primary">
                프리미엄 보증 문의하기
              </Button>
              <Button href="tel:031-000-0000" size="lg" variant="outline">
                전화 상담
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Warranty;
