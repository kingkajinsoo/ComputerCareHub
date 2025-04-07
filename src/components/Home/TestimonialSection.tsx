import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReviewCard from '../UI/ReviewCard';
import AnimatedSection from '../UI/AnimatedSection';
import Button from '../UI/Button';
import { api } from '../../services/api';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  service: string;
}

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // 초기 데이터
  const initialTestimonials = [
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
    }
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/reviews', {
          params: { page: 1, per_page: 3 }
        });
        
        if (response.data && response.data.reviews) {
          setTestimonials(response.data.reviews);
        } else {
          // 응답 구조가 예상과 다른 경우
          console.error('Unexpected API response structure:', response.data);
          setTestimonials(initialTestimonials);
        }
        
        setError('');
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('리뷰를 불러오는 데 실패했습니다.');
        // 오류 시 기본 데이터 사용
        setTestimonials(initialTestimonials);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            고객 <span className="text-blue-500">후기</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            다나와 행신센터의 서비스를 경험한 고객님들의 생생한 후기를 확인하세요.
          </p>
        </AnimatedSection>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1} direction="up">
                <ReviewCard
                  name={testimonial.name}
                  date={testimonial.date}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  service={testimonial.service}
                />
              </AnimatedSection>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-4 mb-8">
            <p className="text-red-400 mb-2">{error}</p>
          </div>
        )}

        <AnimatedSection className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button to="/reviews" size="lg">
              모든 후기 보기
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialSection;
