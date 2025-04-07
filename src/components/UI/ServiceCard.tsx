import React from 'react';
import Card from './Card';
import Button from './Button';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  features?: string[];
  serviceType?: string; // 서비스 타입 (URL 파라미터로 사용)
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  features,
  serviceType,
  onClick,
}) => {
  return (
    <Card 
      className="p-6 flex flex-col h-full transition-all duration-300 hover:border-blue-500 border-2 border-transparent"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 mr-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      
      {price && (
        <div className="bg-gray-700/50 p-3 rounded-md mb-4">
          <span className="text-sm text-gray-400">시작가</span>
          <p className="text-2xl font-bold text-white">{price}</p>
        </div>
      )}
      
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="w-5 h-5 text-blue-500 mr-2 mt-0.5" 
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
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-5">
        <Button 
          to={`/contact${serviceType ? `?service=${serviceType}` : ''}`}
          variant="primary"
          fullWidth
        >
          {serviceType ? `${title} 문의하기` : '문의하기'}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
