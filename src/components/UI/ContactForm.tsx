import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { api } from '../../services/api';
import { useSearchParams } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: 'other', // 기본값을 other로 설정
  message: '',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams] = useSearchParams();

  const serviceOptions = [
    { value: 'other', label: '서비스 선택' }, // 기본값을 other로 변경
    { value: 'emergency', label: '긴급 출장 요청' },
    { value: 'hardware', label: '하드웨어 수리' },
    { value: 'software', label: '소프트웨어 문제' },
    { value: 'upgrade', label: '업그레이드 및 최적화' },
    { value: 'rental', label: '컴퓨터 렌탈' },
    { value: 'quote', label: '견적 요청하기' },
    { value: 'premium', label: '프리미엄 보증 문의' },
    { value: 'visit', label: '출장 수리 예약' },
    { value: 'consultation', label: '구매 상담' },
    { value: 'other', label: '기타 문의' },
  ];
  
  // URL 파라미터를 통해 서비스 선택
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // 유효한 서비스인지 확인
      const validService = serviceOptions.find(option => option.value === serviceParam);
      if (validService) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요';
    } else if (!/^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = '유효한 전화번호를 입력해주세요';
    }
    
    if (!formData.service) {
      newErrors.service = '서비스를 선택해주세요';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '문의 및 요청 사항을 입력해주세요';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear the error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await api.post('/contact', formData);
      
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 개발중: 서비스 옵션 확인용 로그
  console.log('Service options available:', serviceOptions);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg"
    >
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-20 h-20 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-6"
          >
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">문의가 접수되었습니다</h3>
          <p className="text-gray-300 mb-6">
            빠른 시일 내에 답변 드리겠습니다. 감사합니다!
          </p>
          <Button onClick={() => setSubmitStatus('idle')}>
            새로운 문의하기
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-white mb-6">문의하기</h3>
          
          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded mb-6">
              <p>{errorMessage}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2">
                전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                  errors.phone ? 'border-red-500' : 'border-gray-600'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="service" className="block text-gray-300 mb-2">
              문의 서비스
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                errors.service ? 'border-red-500' : 'border-gray-600'
              }`}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-red-500 text-sm">{errors.service}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              문의 및 요청 사항
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                errors.message ? 'border-red-500' : 'border-gray-600'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                전송 중...
              </span>
            ) : (
              '문의하기'
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
