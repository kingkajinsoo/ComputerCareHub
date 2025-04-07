import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewCard from '../components/UI/ReviewCard';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { api } from '../services/api';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  service: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const reviewsPerPage = 9;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/reviews', {
          params: { page, per_page: reviewsPerPage }
        });
        
        if (page === 1) {
          setReviews(response.data.reviews);
        } else {
          setReviews(prev => [...prev, ...response.data.reviews]);
        }
        
        setHasMore(response.data.total > page * reviewsPerPage);
        setError('');
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('리뷰를 불러오는 데 실패했습니다.');
        
        // Use fallback data if API fails
        if (page === 1) {
          setReviews(fallbackReviews);
          setHasMore(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Helmet>
        <title>고객 후기 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 서비스를 경험한 고객님들의 생생한 후기를 확인하세요. 전문적인 컴퓨터 수리 및 렌탈 서비스에 대한 실제 고객들의 평가를 확인할 수 있습니다." />
        <meta name="keywords" content="컴퓨터 수리 후기, 고객 리뷰, 컴퓨터 렌탈 평가, 다나와 행신센터 리뷰, 컴퓨터 출장 수리 후기" />
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
              고객 <span className="text-blue-500">후기</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              다나와 행신센터의 서비스를 경험한 고객님들의 생생한 후기입니다.
              정직한 가격과 전문적인 기술로 높은 고객 만족도를 자랑합니다.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[5, 4, 3, 2, 1].map((star) => (
                <div 
                  key={star} 
                  className="flex items-center bg-gray-800 px-4 py-2 rounded-full"
                >
                  <div className="flex mr-2">
                    {Array.from({ length: star }).map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">{getReviewCountByRating(reviews, star)}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg inline-block">
              <div className="flex items-center justify-center text-2xl font-bold text-white">
                <span className="text-yellow-400 mr-2">
                  {calculateAverageRating(reviews).toFixed(1)}
                </span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400 ml-1">5.0</span>
              </div>
              <p className="text-gray-400 text-sm">전체 평균 평점</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {isLoading && page === 1 ? (
            <div className="flex justify-center py-20">
              <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : error && reviews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()} variant="outline">
                다시 시도
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <AnimatedSection key={review.id} delay={0.05 * (index % 9)}>
                    <ReviewCard
                      name={review.name}
                      date={review.date}
                      rating={review.rating}
                      comment={review.comment}
                      service={review.service}
                    />
                  </AnimatedSection>
                ))}
              </div>

              {reviews.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 mb-4">아직 등록된 리뷰가 없습니다.</p>
                </div>
              )}

              {hasMore && (
                <div className="text-center mt-12">
                  <Button
                    onClick={loadMore}
                    variant="outline"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        로딩 중...
                      </span>
                    ) : (
                      "더 보기"
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Review Form Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-gray-800 rounded-2xl p-8 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">리뷰를 남겨주세요</h2>
            <p className="text-xl text-gray-300 mb-8">
              다나와 행신센터의 서비스를 이용하셨나요?<br />
              여러분의 소중한 의견을 남겨주세요.
            </p>
            <Button to="/write-review" size="lg" variant="primary">
              리뷰 작성하기
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Helper functions for rating calculations
const calculateAverageRating = (reviews: Review[]): number => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return sum / reviews.length;
};

const getReviewCountByRating = (reviews: Review[], rating: number): number => {
  return reviews.filter(review => review.rating === rating).length;
};

// Fallback data in case API fails
const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "김민준",
    date: "2023.05.12",
    rating: 5,
    comment: "갑자기 컴퓨터가 켜지지 않아 당황했는데, 전화 후 1시간 만에 방문해주셔서 신속하게 해결해주셨어요. 친절한 설명과 함께 문제 원인을 자세히 알려주셔서 좋았습니다.",
    service: "긴급 출장 수리"
  },
  {
    id: 2,
    name: "이서연",
    date: "2023.04.27",
    rating: 5,
    comment: "노트북 화면이 깨져서 방문했는데, 예상보다 저렴한 가격에 빠르게 수리해주셨어요. 다른 곳에서는 교체만 가능하다고 했는데 여기서는 수리로 해결해주셔서 비용도 절약했습니다.",
    service: "노트북 화면 수리"
  },
  {
    id: 3,
    name: "박지훈",
    date: "2023.06.02",
    rating: 4,
    comment: "갑자기 블루스크린이 자주 떠서 문의드렸는데, 빠르게 원인을 찾아주시고 해결해주셨어요. 추가로 컴퓨터 성능 최적화까지 해주셔서 전보다 훨씬 빨라졌습니다.",
    service: "소프트웨어 문제 해결"
  },
  {
    id: 4,
    name: "최수아",
    date: "2023.03.15",
    rating: 5,
    comment: "하드디스크가 고장나서 중요한 자료가 날아갈 뻔했는데, 데이터 복구 서비스로 거의 모든 파일을 살려주셨어요. 정말 감사합니다. 앞으로도 컴퓨터 문제가 생기면 무조건 여기로 올 것 같아요.",
    service: "데이터 복구"
  },
  {
    id: 5,
    name: "정도윤",
    date: "2023.06.20",
    rating: 4,
    comment: "게이밍 PC 조립을 의뢰했는데, 제 예산에 맞춰 최적의 부품을 추천해주시고 깔끔하게 조립해주셨어요. 케이블 정리도 정말 깔끔하고, 사용법도 자세히 알려주셔서 만족스럽습니다.",
    service: "PC 조립"
  },
  {
    id: 6,
    name: "한미래",
    date: "2023.05.05",
    rating: 5,
    comment: "사무실 네트워크 문제로 업무가 마비될 뻔했는데, 긴급 출장으로 신속하게 해결해주셨어요. 문제의 원인도 찾아서 앞으로 같은 문제가 발생하지 않도록 조치해주셨습니다. 매우 전문적이고 친절한 서비스에 감사드립니다.",
    service: "네트워크 문제 해결"
  },
  {
    id: 7,
    name: "송현우",
    date: "2023.07.08",
    rating: 3,
    comment: "컴퓨터 업그레이드를 했는데, 처음 예상보다 비용이 조금 더 들었어요. 하지만 작업 퀄리티는 좋았고 설명도 자세히 해주셔서 크게 불만은 없습니다. 다음에는 미리 더 상세한 견적을 받아보고 진행할 것 같아요.",
    service: "PC 업그레이드"
  },
  {
    id: 8,
    name: "임지민",
    date: "2023.04.10",
    rating: 5,
    comment: "노트북이 너무 뜨겁고 소리가 심해서 방문했는데, 내부 청소와 쿨링 패드 교체로 문제를 완벽하게 해결해주셨어요. 먼지가 엄청 쌓여있었는데 이제 소리도 안 나고 훨씬 시원해졌습니다. 친절한 서비스 감사합니다!",
    service: "노트북 점검 및 청소"
  },
  {
    id: 9,
    name: "오준서",
    date: "2023.06.30",
    rating: 5,
    comment: "회사 행사용으로 노트북 10대를 대여했는데, 모든 장비가 완벽하게 세팅되어 있어서 따로 설정할 필요가 없었어요. 행사 중간에 기술적인 문제가 있었는데 즉시 지원도 와주셔서 행사를 성공적으로 마칠 수 있었습니다. 다음 행사에도 이용할 예정입니다.",
    service: "컴퓨터 렌탈"
  }
];

export default Reviews;
