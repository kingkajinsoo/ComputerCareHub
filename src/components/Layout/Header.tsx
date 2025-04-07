import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button';
import { MenuIcon, CloseIcon } from '../../assets/icons';

const Header: React.FC = () => {
  const location = useLocation();
  // 모바일 모드 관리는 이제 CSS 미디어 쿼리만으로 처리합니다
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navigation links
  const navLinks = [
    { title: '홈', path: '/' },
    { title: '서비스', path: '/services' },
    { title: '포트폴리오', path: '/portfolio' },
    { title: '고객 리뷰', path: '/reviews' },
    { title: '오시는 길', path: '/location' },
    { title: '보증 안내', path: '/warranty' },
    { title: 'SNS', path: '/social' },
  ];

  // Check if the current path matches the nav link
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  // Header classes based on scroll position
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 ${
    scrolled ? 'bg-primary shadow-md py-3' : 'bg-transparent py-5'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-lg md:text-xl">
            다나와 행신센터
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-white hover:text-accent-light'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Button 
              to="/contact" 
              variant="primary" 
              size="sm"
              className={isActive('/contact') ? 'bg-accent-dark' : ''}
            >
              문의하기
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isOpen ? (
              <CloseIcon size={24} color="currentColor" />
            ) : (
              <MenuIcon size={24} color="currentColor" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div 
                className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
              
              <motion.nav
                className="md:hidden mt-5 overflow-hidden relative z-50"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <motion.div className="flex flex-col space-y-4 pb-6 bg-primary px-4 py-6 rounded-lg shadow-xl">
                  {/* Close button at the top right */}
                  <div className="flex justify-end pb-2">
                    <button 
                      className="text-white p-1 hover:text-accent-light transition-colors"
                      onClick={() => setIsOpen(false)}
                      aria-label="메뉴 닫기"
                    >
                      <CloseIcon size={24} color="currentColor" />
                    </button>
                  </div>

                  {navLinks.map((link) => (
                    <motion.div key={link.path} variants={menuItemVariants}>
                      <Link
                        to={link.path}
                        className={`block text-sm font-medium py-2 transition-colors duration-300 ${
                          isActive(link.path)
                            ? 'text-accent'
                            : 'text-white hover:text-accent-light'
                        }`}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={menuItemVariants}>
                    <Button to="/contact" variant="primary" size="sm" fullWidth>
                      문의하기
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;