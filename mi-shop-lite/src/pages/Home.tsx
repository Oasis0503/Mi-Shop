import React from 'react'
import { Helmet } from 'react-helmet-async'
// @ts-expect-error - HiUI type declarations issue
import Carousel from '@hi-ui/carousel'

export default function Home() {
  // 轮播图片数据
  const carouselImages = [
    {
      id: 'carousel-phone',
      src: '/images/carousel/phone.jpg',
      alt: '小米手机 旗舰影像',
      href: '/products/mi17-pro-max'
    },
    {
      id: 'carousel-tv', 
      src: '/images/carousel/TV.jpg',
      alt: '小米电视 巨屏体验',
      href: '/products/mi-tv-s85'
    },
    {
      id: 'carousel-pad',
      src: '/images/carousel/pad.jpg', 
      alt: '小米平板 便携办公',
      href: '/products/mi-pad'
    },
    {
      id: 'carousel-sound',
      src: '/images/carousel/sound.jpg',
      alt: '小米音响 智能音效',
      href: '/products/mi-sound'
    },
    {
      id: 'carousel-wifi',
      src: '/images/carousel/Wifi.jpg',
      alt: '小米路由器 极速网络',
      href: '/products/mi-router'
    },
    {
      id: 'carousel-wm',
      src: '/images/carousel/WM.jpg',
      alt: '小米洗衣机 智能清洁',
      href: '/products/mi-washing-machine'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Home - Mi Shop</title>
      </Helmet>
      
      <div style={{ padding: '24px 16px', maxWidth: '1600px', margin: '0 auto' }}>
        {/* 页面标题 */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '600', 
            color: '#333',
            margin: '0 0 8px 0'
          }}>
            小米商城
          </h1>
        </div>

        {/* 轮播图片 - 整个组件向右偏移 */}
        <div style={{ 
          marginBottom: '48px',
          marginLeft: '400px',  // 整个轮播图组件向右偏移400px
          height: '500px',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <Carousel
            duration={4000}        // 自动切换间隔4秒
            showDots={true}        // 显示分页指示器
            showArrows={true}      // 显示箭头指示器
            defaultActive={0}      // 默认激活第一张图片
            style={{ height: '100%' }}
          >
            {carouselImages.map((image) => (
              <div
                key={image.id}
                style={{
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  if (image.href) {
                    window.location.href = image.href
                  }
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    img.src = '/images/products/placeholder.svg'
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    </>
  )
}


