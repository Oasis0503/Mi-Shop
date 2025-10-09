import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ProductCarousel, type CarouselImage } from '../components'

export default function Home() {
  const carouselImages: CarouselImage[] = [
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
          marginLeft: '400px'  // 整个轮播图组件向右偏移300px
        }}>
          <ProductCarousel
            images={carouselImages}
            autoPlay={true}
            interval={4000}
            showDots={true}
            showArrows={true}
            style={{
              height: '500px'
              // 不设置width，保持组件原来的完整宽度
            }}
          />
        </div>

      </div>
    </>
  )
}


