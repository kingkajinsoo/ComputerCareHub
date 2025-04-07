import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  imageAlt?: string;
  onClick?: () => void;
}

const PortfolioCard: React.FC<PortfolioItemProps> = ({
  title,
  description,
  category,
  imageUrl,
  imageAlt,
  onClick,
}) => {
  return (
    <Card 
      className="overflow-hidden h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-700 flex items-center justify-center">
        {imageUrl ? (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity"
              whileHover={{ opacity: 1 }}
            />
            <img 
              src={imageUrl} 
              alt={imageAlt || title} 
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <svg 
              className="w-20 h-20 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1" 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <span className="text-blue-500 text-sm font-medium mb-2">{category}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>
        
        <motion.button 
          className="mt-4 text-blue-400 font-medium flex items-center group"
          whileHover={{ x: 5 }}
          onClick={onClick}
        >
          상세 보기
          <svg 
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </Card>
  );
};

export default PortfolioCard;
