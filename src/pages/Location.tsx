import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

declare global {
  interface Window {
    kakao: any;
  }
}

const Location: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        setMapLoaded(true);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      // 가상의 좌표 (실제 위치로 변경 필요)
      const lat = 37.6155; 
      const lng = 126.8335;

      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 4
      };

      const map = new window.kakao.maps.Map(mapRef.current, options);
      
      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(lat, lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);

      // 커스텀 오버레이 생성
      const content = `
        <div style="padding: 0.5rem 1rem; background: #1E40AF; color: white; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); font-family: 'Pretendard', sans-serif; font-weight: bold;">
          다나와 행신센터
        </div>
      `;
      
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: content,
        yAnchor: 1.3
      });
      
      customOverlay.setMap(map);

      // 반응형 처리
      const handleResize = () => {
        map.setCenter(markerPosition);
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mapLoaded]);

  return (
    <>
      <Helmet>
        <title>찾아오시는 길 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 위치와 찾아오시는 방법을 안내해 드립니다. 편리한 접근성과 주차 시설을 갖추고 있습니다." />
        <meta name="keywords" content="다나와 행신센터 위치, 컴퓨터 수리 센터 위치, 행신동 컴퓨터 수리, 고양시 컴퓨터 수리, 찾아오시는 길" />
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
              찾아오시는 <span className="text-blue-500">길</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              다나와 행신센터는 경기도 고양시 덕양구 행신동에 위치하고 있습니다.
              방문 전 전화로 예약하시면 더욱 빠른 서비스를 받으실 수 있습니다.
            </p>
            <Button href="tel:031-000-0000" variant="primary" icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }>
              031-000-0000
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="rounded-xl overflow-hidden shadow-lg bg-gray-800 mb-10">
            <div ref={mapRef} className="w-full h-[500px]">
              {!mapLoaded && (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              )}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-800 rounded-xl p-6 h-full">
                <h2 className="text-2xl font-bold text-white mb-4">주소 및 연락처</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">주소</h3>
                      <p className="text-gray-300">경기도 고양시 덕양구 행신동 000번지 다나와 행신센터</p>
                      <p className="text-gray-300">우편번호: 10000</p>
                      <div className="mt-2 flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText('경기도 고양시 덕양구 행신동 000번지 다나와 행신센터');
                            alert('주소가 클립보드에 복사되었습니다.');
                          }}
                        >
                          주소 복사
                        </Button>
                        <a 
                          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
                          href="https://map.kakao.com/link/to/다나와 행신센터,37.6155,126.8335"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          길찾기
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4 flex-shrink-0">
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
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">영업시간</h3>
                      <p className="text-gray-300">평일: 09:00 - 18:00</p>
                      <p className="text-gray-300">토요일: 09:00 - 15:00</p>
                      <p className="text-gray-300">일요일 및 공휴일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-800 rounded-xl p-6 h-full">
                <h2 className="text-2xl font-bold text-white mb-4">오시는 방법</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">대중교통</h3>
                      <p className="font-semibold text-blue-400 mt-2">지하철</p>
                      <p className="text-gray-300">경의중앙선 행신역 2번 출구에서 도보 5분</p>
                      
                      <p className="font-semibold text-blue-400 mt-2">버스</p>
                      <p className="text-gray-300">75번, 76번, 82번 버스 행신중학교 하차 후 도보 3분</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">자가용</h3>
                      <p className="text-gray-300">네비게이션에 "다나와 행신센터" 또는 "경기도 고양시 덕양구 행신동 000번지" 검색</p>
                      <p className="text-blue-400 mt-1">주차 안내: 건물 내 지하주차장 이용 가능 (무료)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">주변 정보</h3>
                      <p className="text-gray-300">행신중학교 건너편</p>
                      <p className="text-gray-300">행신동 우체국에서 100m</p>
                      <p className="text-gray-300">행신 주민센터 인근</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-white mb-6">출장 수리 서비스</h2>
            <p className="text-xl text-gray-300 mb-8">
              직접 방문이 어려우신가요?<br />
              30분 내 빠른 출장 서비스로 찾아갑니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" size="lg" variant="primary">
                출장 수리 예약
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

export default Location;
