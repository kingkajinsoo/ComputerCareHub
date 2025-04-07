import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PortfolioCard from '../components/UI/PortfolioCard';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { api } from '../services/api';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  details: string;
  imageUrl?: string;
  date: string;
}

// Categories for filtering
const categories = [
  { id: 'all', name: '전체' },
  { id: 'hardware', name: '하드웨어 수리' },
  { id: 'software', name: '소프트웨어 문제' },
  { id: 'data', name: '데이터 복구' },
  { id: 'network', name: '네트워크' },
  { id: 'business', name: '기업 서비스' },
];

const Portfolio: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/portfolio');
        setItems(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching portfolio items:', err);
        setError('포트폴리오 데이터를 불러오는 데 실패했습니다.');
        // Use fallback data if API fails
        setItems(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => {
        const categoryMap: Record<string, string> = {
          'hardware': '하드웨어 수리',
          'software': '소프트웨어 문제',
          'data': '데이터 복구',
          'network': '네트워크',
          'business': '기업 서비스',
        };
        return item.category === categoryMap[selectedCategory];
      });

  // Open detail modal
  const openDetail = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  // Close detail modal
  const closeDetail = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Helmet>
        <title>수리 사례 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 다양한 컴퓨터 수리 및 서비스 사례를 소개합니다. 하드웨어 수리, 소프트웨어 문제 해결, 데이터 복구 등 다양한 문제 해결 사례를 확인하세요." />
        <meta name="keywords" content="컴퓨터 수리 사례, 데이터 복구 사례, 하드웨어 수리, 소프트웨어 문제 해결, 네트워크 설정, 컴퓨터 포트폴리오" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
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
              다양한 <span className="text-blue-500">수리 사례</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              다나와 행신센터에서 수행한 다양한 컴퓨터 수리 및 서비스 사례입니다.
              하드웨어부터 소프트웨어까지, 어떤 문제든 해결해 드립니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-800 sticky top-16 z-30 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "primary" : "outline"}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Items Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()} variant="outline">
                다시 시도
              </Button>
            </div>
          ) : (
            <>
              <AnimatePresence>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {filteredItems.map((item) => (
                    <AnimatedSection key={item.id} delay={0.05 * (item.id % 10)}>
                      <PortfolioCard
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        imageUrl={item.imageUrl}
                        onClick={() => openDetail(item)}
                      />
                    </AnimatedSection>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredItems.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 mb-4">해당 카테고리의 사례가 없습니다.</p>
                  <Button onClick={() => setSelectedCategory('all')} variant="outline">
                    전체 보기
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetail}
          >
            <motion.div
              className="bg-gray-800 max-w-3xl w-full rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.imageUrl && (
                <div className="aspect-video w-full bg-gray-700 overflow-hidden">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-blue-400 font-medium block mb-1">
                      {selectedItem.category} · {selectedItem.date}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                  </div>
                  <button
                    onClick={closeDetail}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                  <div className="mt-6 text-gray-300 whitespace-pre-line">
                    {selectedItem.details}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button onClick={closeDetail} variant="outline">
                    닫기
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-gradient-to-r from-blue-900/30 to-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">도움이 필요하신가요?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              어떤 컴퓨터 문제든 다나와 행신센터의 전문가가 해결해 드립니다.
              지금 바로 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" size="lg" variant="primary">
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

// Fallback data in case API fails
const fallbackData: PortfolioItem[] = [
  {
    id: 1,
    title: "그래픽카드 고장 수리",
    description: "오버클럭으로 인한 그래픽카드 손상 복구 및 팬 교체 작업",
    category: "하드웨어 수리",
    details: "고객님께서 게임 중 갑자기 화면이 깨지고 PC가 재부팅되는 현상으로 방문하셨습니다.\n\n진단 결과, 그래픽카드의 오버클럭 설정으로 인한 VRM 회로 손상과 쿨링 팬 고장이 확인되었습니다. 손상된 부품을 교체하고 정상 클럭으로 재설정 후 충분한 스트레스 테스트를 진행했습니다.\n\n수리 후에는 최적의 온도와 성능을 위한 쿨링 솔루션도 제안해 드렸습니다.",
    imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "2023.06.15"
  },
  {
    id: 2,
    title: "랜섬웨어 제거 및 데이터 복구",
    description: "악성 랜섬웨어 제거 및 중요 파일 복구 작업",
    category: "소프트웨어 문제",
    details: "소규모 회사에서 갑자기 모든 파일이 암호화되고 몸값을 요구하는 화면이 나타나는 랜섬웨어 감염 사례입니다.\n\n즉시 네트워크에서 분리하고 악성코드 분석을 진행했습니다. 최신 복구 도구를 활용해 랜섬웨어를 제거하고, 백업되지 않은 중요 파일들을 가능한 범위 내에서 복구했습니다.\n\n이후 보안 시스템 강화와 정기적인 백업 솔루션을 구축하여 추가 피해를 방지했습니다.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "2023.05.23"
  },
  {
    id: 3,
    title: "사무실 PC 10대 정기 점검",
    description: "중소기업 사무실 컴퓨터 정기 유지보수 및 성능 최적화",
    category: "기업 서비스",
    details: "10인 규모의 디자인 회사와 정기 유지보수 계약을 체결하여 매월 정기 점검을 진행한 사례입니다.\n\n모든 워크스테이션의 하드웨어 상태를 확인하고, 디스크 조각 모음, 임시 파일 정리, 드라이버 업데이트 등의 최적화 작업을 수행했습니다.\n\n특히 그래픽 작업이 많은 환경에 맞춰 메모리 및 그래픽카드 상태를 집중적으로 관리하여 작업 효율을 크게 향상시켰습니다.",
    imageUrl: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "2023.07.05"
  },
  {
    id: 4,
    title: "노트북 액정 교체",
    description: "떨어뜨려 깨진 노트북 화면 교체 및 하드 디스크 데이터 복구",
    category: "하드웨어 수리",
    details: "고객님께서 노트북을 떨어뜨려 화면이 깨지고 부팅이 되지 않는 상황으로 방문하셨습니다.\n\n진단 결과, LCD 패널 파손과 하드 디스크 손상이 확인되었습니다. 정품 LCD 패널로 교체하고, 손상된 하드 디스크에서 중요 데이터를 복구했습니다.\n\n또한 추가 안전을 위해 SSD로 업그레이드를 제안하여 성능 향상과 동시에 물리적 충격에 더 강한 저장 장치로 교체했습니다.",
    imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "2023.04.18"
  },
  {
    id: 5,
    title: "메인보드 교체 및 시스템 업그레이드",
    description: "낙뢰로 인한 메인보드 손상 수리 및 시스템 전체 업그레이드",
    category: "하드웨어 수리",
    details: "낙뢰로 인해 컴퓨터가 전혀 켜지지 않는 상황으로 방문 수리를 요청하셨습니다.\n\n진단 결과, 메인보드의 전원부가 완전히 손상되었으며 CPU와 RAM은 다행히 무사했습니다. 최신 메인보드로 교체하면서, 고객님의 요청에 따라 CPU 쿨러와 케이스 팬도 함께 업그레이드했습니다.\n\n또한 안정적인 전원 공급을 위해 고품질 파워 서플라이와 서지 프로텍터를 추가로 설치하여 향후 유사한 사고를 방지했습니다.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "2023.03.29"
  },
  {
    id: 6,
    title: "사무실 네트워크 구축",
    description: "신규 사무실 개설에 따른 네트워크 인프라 구축 및 설정",
    category: "네트워크",
    details: "새로운 사무실로 이전하는 20인 규모 기업의 전체 네트워크 인프라를 구축했습니다.\n\n기가비트 유선 네트워크와 듀얼 밴드 무선 네트워크를 설치하고, 보안을 위한 방화벽을 구성했습니다. 또한 부서별 접근 권한 설정과 게스트 네트워크 분리 등 세부적인 네트워크 정책도 함께 수립했습니다.\n\n추가로 네트워크 모니터링 시스템을 도입하여 실시간으로 트래픽과 보안 상태를 확인할 수 있도록 했습니다.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    date: "2023.02.10"
  },
  {
    id: 7,
    title: "외장하드 데이터 복구",
    description: "포맷된 외장하드에서 중요 사진 및 문서 파일 복구",
    category: "데이터 복구",
    details: "실수로 외장하드를 포맷한 후 중요한 가족 사진과 업무 문서를 잃어버린 고객님의 데이터 복구 사례입니다.\n\n전문 복구 소프트웨어를 사용하여 삭제된 파일의 흔적을 찾아내고, 손상되지 않은 파일들을 성공적으로 복구했습니다. 약 95%의 데이터를 원래 폴더 구조와 함께 복원할 수 있었습니다.\n\n향후 데이터 손실을 방지하기 위한 클라우드 백업 솔루션도 함께 제안해 드렸습니다.",
    imageUrl: "https://images.unsplash.com/photo-1531492809791-98de7a4e7aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "2023.05.02"
  },
  {
    id: 8,
    title: "게이밍 PC 조립 및 최적화",
    description: "고성능 게이밍을 위한 커스텀 PC 조립 및 오버클러킹",
    category: "하드웨어 수리",
    details: "고사양 게임을 위한 고성능 게이밍 PC 구축 사례입니다.\n\n최신 인텔 i7 프로세서와 RTX 3080 그래픽카드를 탑재한 시스템을 조립하고, 안정적인 오버클러킹을 통해 최대 성능을 확보했습니다. 수랭 쿨링 시스템을 설치하여 온도를 효과적으로 관리하고, RGB 조명으로 시각적 효과도 추가했습니다.\n\n또한 게임별 최적의 설정을 구성하고 벤치마킹 테스트를 통해 안정성을 확인했습니다.",
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "2023.06.20"
  },
  {
    id: 9,
    title: "바이러스 감염 PC 복구",
    description: "심각한 악성코드 감염으로 인한 시스템 복구 및 보안 강화",
    category: "소프트웨어 문제",
    details: "여러 악성 프로그램에 감염되어 작동이 매우 느려진 PC를 복구한 사례입니다.\n\n부팅 불가 상태에서 특수 복구 도구를 사용하여 시스템에 접근하고, 루트킷을 포함한 다양한 악성코드를 제거했습니다. 손상된 시스템 파일을 복구하고 윈도우 레지스트리를 정리했습니다.\n\n또한 안티바이러스 프로그램 설치 및 설정, 방화벽 강화, 자동 업데이트 활성화 등 종합적인 보안 대책을 마련했습니다.",
    imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    date: "2023.07.11"
  }
];

export default Portfolio;
