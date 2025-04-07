import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  service: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  rating,
  comment,
  service,
}) => {
  // Create an array of 5 elements for star rating
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
        <div className="flex">
          {stars.map((filled, i) => (
            <motion.svg
              key={i}
              whileHover={{ scale: 1.2 }}
              className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
      </div>

      <div className="bg-gray-700/30 px-3 py-1.5 rounded text-sm text-gray-300 inline-block mb-3">
        {service}
      </div>

      <blockquote className="text-gray-300 italic relative">
        <svg
          className="absolute top-0 left-0 w-6 h-6 text-gray-700 -translate-x-3 -translate-y-3 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="pl-4">{comment}</p>
      </blockquote>
    </Card>
  );
};

export default ReviewCard;
