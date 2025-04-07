import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { reviewsApi } from '../services/api';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    service: '',
    comment: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const services = [
    '하드웨어 수리',
    '소프트웨어 문제',
    '데이터 복구',
    '노트북 수리',
    '업그레이드 및 최적화',
    '네트워크 문제 해결',
    '컴퓨터 렌탈',
    '유지보수 계약',
    '긴급 출장 수리',
    '긴급 출장 요청',
    '견적 요청하기',
    '프리미엄 보증 문의',
    '출장 수리 예약',
    '기타',
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.service || !formData.comment) {
      setError('모든 필드를 입력해 주세요.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      await reviewsApi.submitReview(formData);
      setSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        rating: 5,
        service: '',
        comment: '',
      });
      
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/reviews');
      }, 3000);
    } catch (err) {
      console.error('Error submitting review:', err);
      setError('리뷰 제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>리뷰 작성 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 서비스를 이용하셨나요? 여러분의 소중한 의견을 남겨주세요." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-900 relative overflow-hidden">
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
              리뷰 <span className="text-blue-500">작성하기</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              다나와 행신센터의 서비스를 이용해 주셔서 감사합니다.
              여러분의 소중한 의견은 저희 서비스 개선에 큰 도움이 됩니다.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Review Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={0.1}>
              {success ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-8 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-4">리뷰가 성공적으로 등록되었습니다!</h3>
                  <p className="text-gray-300 mb-6">
                    소중한 의견을 남겨주셔서 감사합니다. 
                    곧 리뷰 페이지로 이동합니다.
                  </p>
                  <Button 
                    to="/reviews" 
                    variant="outline"
                  >
                    리뷰 페이지로 이동
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 border border-gray-700/50">
                  <h2 className="text-2xl font-bold text-white mb-6">서비스 이용 후기</h2>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-md text-red-400">
                      {error}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-300 font-medium mb-2">
                      이용한 서비스 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">서비스를 선택해주세요</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 font-medium mb-2">
                      평점 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-3">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <label key={rating} className="flex flex-col items-center cursor-pointer">
                          <input
                            type="radio"
                            name="rating"
                            value={rating}
                            checked={formData.rating === rating}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <svg 
                            className={`w-10 h-10 ${formData.rating >= rating ? 'text-yellow-400' : 'text-gray-500'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-gray-400 text-sm mt-1">{rating}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="comment" className="block text-gray-300 font-medium mb-2">
                      리뷰 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="서비스 이용 경험을 자세히 작성해 주세요..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          제출 중...
                        </span>
                      ) : (
                        "리뷰 등록하기"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default WriteReview;