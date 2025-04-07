import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/UI/AnimatedSection';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Social: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Social media platforms
  const socialPlatforms = [
    {
      name: '네이버 블로그',
      description: '컴퓨터 관련 유용한 정보와 다나와 행신센터의 일상을 공유합니다.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
        </svg>
      ),
      url: 'https://blog.naver.com/',
      color: 'bg-green-700/20',
      textColor: 'text-green-500',
      posts: [
        {
          title: '컴퓨터 수명을 늘리는 간단한 관리 팁 5가지',
          date: '2023.07.15',
          excerpt: '일상적으로 할 수 있는 간단한 관리만으로도 컴퓨터 수명을 크게 늘릴 수 있습니다. 정기적인 청소와 업데이트만으로도...',
          url: '#'
        },
        {
          title: '윈도우 11 업그레이드, 해야 할까? 말아야 할까?',
          date: '2023.06.30',
          excerpt: '윈도우 11이 출시된 지 벌써 1년이 넘었습니다. 여전히 업그레이드를 고민하고 계신가요? 윈도우 11의 장단점과 업그레이드 전 확인해야 할 사항들을...',
          url: '#'
        },
        {
          title: '하드디스크 vs SSD, 무엇을 선택해야 할까?',
          date: '2023.06.10',
          excerpt: '컴퓨터 성능 향상을 위한 가장 효과적인 방법 중 하나가 SSD 교체입니다. 하드디스크와 SSD의 차이점과 선택 기준에 대해 알아봅시다...',
          url: '#'
        }
      ]
    },
    {
      name: '유튜브 채널',
      description: '컴퓨터 수리 과정과 유용한 팁을 영상으로 제공합니다.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.06,7.6a2.5,2.5,0,0,0-1.77-1.77C18.7,5.35,12,5.35,12,5.35s-6.7,0-8.29.47A2.51,2.51,0,0,0,1.94,7.6,26.27,26.27,0,0,0,1.46,12a26.19,26.19,0,0,0,.48,4.4,2.51,2.51,0,0,0,1.77,1.77c1.59.48,8.29.48,8.29.48s6.7,0,8.29-.48a2.5,2.5,0,0,0,1.77-1.77A26.19,26.19,0,0,0,22.54,12,26.27,26.27,0,0,0,22.06,7.6ZM9.88,15.42V8.58L15.51,12Z"/>
        </svg>
      ),
      url: 'https://youtube.com/',
      color: 'bg-red-700/20',
      textColor: 'text-red-500',
      videos: [
        {
          title: '쉽게 따라하는 컴퓨터 먼지 청소 방법',
          date: '2023.07.20',
          views: '1.2만 조회수',
          thumbnail: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          url: '#'
        },
        {
          title: '그래픽카드 고장? 직접 진단하는 방법',
          date: '2023.07.05',
          views: '8.5천 조회수',
          thumbnail: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          url: '#'
        }
      ]
    },
    {
      name: '인스타그램',
      description: '다나와 행신센터의 일상과 특별 이벤트 소식을 전합니다.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
        </svg>
      ),
      url: 'https://instagram.com/',
      color: 'bg-purple-700/20',
      textColor: 'text-purple-500',
      posts: [
        {
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          likes: 124,
          comments: 14,
          url: '#'
        },
        {
          image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          likes: 89,
          comments: 7,
          url: '#'
        },
        {
          image: 'https://images.unsplash.com/photo-1563770660941-10971f2c6610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          likes: 156,
          comments: 23,
          url: '#'
        },
        {
          image: 'https://images.unsplash.com/photo-1597872200969-2c90cfa11afa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          likes: 112,
          comments: 9,
          url: '#'
        }
      ]
    },
    {
      name: '카카오톡 채널',
      description: '빠른 상담과 견적 문의를 카카오톡으로 편리하게 이용하세요.',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,3C6.4771729,3,2,6.6862915,2,11.2000008c0,2.9554996,1.9650002,5.5474987,4.9630013,7.0454998C6.8395,19.8792152,6.2413335,21.6929836,6.2,22c0,0,0.040667,0.5,0.4934998,0.2252006c0.4529991-0.2748013,3.8844986-2.5218983,4.4795008-2.9044991C11.4304256,19.4052219,11.7100191,19.4000149,12,19.4000015c5.5228271,0,10-4.6862926,10-9.2000008C22,6.6862915,17.5228271,3,12,3z"/>
        </svg>
      ),
      url: 'https://pf.kakao.com/',
      color: 'bg-yellow-500/20',
      textColor: 'text-yellow-500',
      features: [
        '실시간 상담 서비스',
        '간편한 견적 문의',
        '수리 진행 상황 공유',
        '보증 기간 조회 서비스',
        '특별 할인 이벤트 안내'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>SNS/블로그 - 다나와 행신센터</title>
        <meta name="description" content="다나와 행신센터의 다양한 SNS 채널과 블로그를 통해 컴퓨터 관련 유용한 정보와 서비스 소식을 확인하세요." />
        <meta name="keywords" content="컴퓨터 수리 블로그, 컴퓨터 팁, 수리 노하우, 다나와 행신센터 SNS, 카카오톡 상담" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 relative overflow-hidden">
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
              <span className="text-blue-500">SNS</span>/블로그
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              다나와 행신센터의 다양한 SNS 채널과 블로그를 통해
              컴퓨터 관련 유용한 정보와 서비스 소식을 확인하세요.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} ${platform.textColor} px-4 py-2 rounded-full flex items-center transition-transform`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{platform.icon}</span>
                  <span className="font-semibold">{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {/* Naver Blog */}
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className={`${socialPlatforms[0].color} p-6 rounded-xl`}>
                  <div className="flex items-center mb-4">
                    <div className={`${socialPlatforms[0].textColor} mr-4`}>
                      {socialPlatforms[0].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{socialPlatforms[0].name}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{socialPlatforms[0].description}</p>
                  <Button 
                    href={socialPlatforms[0].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    블로그 방문하기
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-6">최근 블로그 포스트</h3>
                <div className="space-y-4">
                  {socialPlatforms[0].posts.map((post, index) => (
                    <motion.a
                      key={index}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-800 rounded-xl p-6 transition-all hover:bg-gray-700"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-bold text-white">{post.title}</h4>
                        <span className="text-sm text-gray-400">{post.date}</span>
                      </div>
                      <p className="text-gray-300">{post.excerpt}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* YouTube */}
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <div className={`${socialPlatforms[1].color} p-6 rounded-xl`}>
                  <div className="flex items-center mb-4">
                    <div className={`${socialPlatforms[1].textColor} mr-4`}>
                      {socialPlatforms[1].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{socialPlatforms[1].name}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{socialPlatforms[1].description}</p>
                  <Button 
                    href={socialPlatforms[1].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    채널 방문하기
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold text-white mb-6">최근 영상</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialPlatforms[1].videos.map((video, index) => (
                    <motion.a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-800 rounded-xl overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-video relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-4">
                            <h4 className="text-white font-bold">{video.title}</h4>
                            <div className="flex justify-between text-sm text-gray-300 mt-1">
                              <span>{video.date}</span>
                              <span>{video.views}</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Instagram */}
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className={`${socialPlatforms[2].color} p-6 rounded-xl`}>
                  <div className="flex items-center mb-4">
                    <div className={`${socialPlatforms[2].textColor} mr-4`}>
                      {socialPlatforms[2].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{socialPlatforms[2].name}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{socialPlatforms[2].description}</p>
                  <Button 
                    href={socialPlatforms[2].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    인스타그램 방문하기
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-6">인스타그램 피드</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialPlatforms[2].posts.map((post, index) => (
                    <motion.a
                      key={index}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-square rounded-xl overflow-hidden relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img 
                        src={post.image} 
                        alt="Instagram post" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/50 flex items-center justify-center space-x-4 transition-opacity">
                        <div className="flex items-center text-white">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center text-white">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                          </svg>
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* KakaoTalk Channel */}
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <div className={`${socialPlatforms[3].color} p-6 rounded-xl`}>
                  <div className="flex items-center mb-4">
                    <div className={`${socialPlatforms[3].textColor} mr-4`}>
                      {socialPlatforms[3].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{socialPlatforms[3].name}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{socialPlatforms[3].description}</p>
                  <Button 
                    href={socialPlatforms[3].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    }
                  >
                    채널 추가하기
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-8">
                <Card className="p-6 h-full">
                  <h3 className="text-2xl font-bold text-white mb-6">카카오톡 채널 서비스</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {socialPlatforms[3].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-full mr-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-gray-700/50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                      <h4 className="text-white font-bold">카카오톡 상담 이용 안내</h4>
                    </div>
                    <p className="text-gray-300 mt-2">
                      평일 9:00 ~ 18:00, 토요일 9:00 ~ 15:00 실시간 응대가 가능합니다.
                      그 외 시간에는 자동 응답으로 기본 정보를 안내해 드리며, 채팅방에 남겨주신 문의는 
                      영업 시간에 확인 후 답변 드립니다.
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-gray-800 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">직접 문의하기</h2>
            <p className="text-xl text-gray-300 mb-8">
              SNS 외에도 전화나 온라인 문의를 통해<br />
              더 자세한 상담을 받아보세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" size="lg" variant="primary">
                문의하기
              </Button>
              <Button href="tel:031-000-0000" size="lg" variant="outline">
                전화 상담
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Social;
