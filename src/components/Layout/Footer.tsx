import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">다나와 행신센터</h3>
            <address className="not-italic mb-4">
              <p className="mb-2">경기도 고양시 덕양구 행신동 123-45</p>
              <p className="mb-2">웨스턴 프라자 3층 308호</p>
              <p className="mb-2">우편번호: 12345</p>
            </address>
            <div className="flex flex-col space-y-2">
              <p>
                <span className="font-semibold mr-2">전화:</span>
                <a href="tel:031-1234-5678" className="text-accent-light hover:text-white">
                  031-1234-5678
                </a>
              </p>
              <p>
                <span className="font-semibold mr-2">이메일:</span>
                <a href="mailto:info@danawa-haengsin.com" className="text-accent-light hover:text-white">
                  info@danawa-haengsin.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">영업 시간</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>월요일 - 금요일:</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>토요일:</span>
                <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>일요일:</span>
                <span>휴무</span>
              </li>
              <li className="flex justify-between">
                <span>공휴일:</span>
                <span>휴무</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-2">SNS</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="https://www.naver.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="Naver"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                  </svg>
                </a>
                <a
                  href="https://www.kakaocorp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="KakaoTalk"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.477 2 12a8.901 8.901 0 0 0 4.065 7.506l-1.032 3.866 4.477-2.946A10.463 10.463 0 0 0 12 21c5.523 0 10-4.477 10-10S17.523 3 12 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} 다나와 행신센터. 모든 권리 보유.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition">
                개인정보 처리방침
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;