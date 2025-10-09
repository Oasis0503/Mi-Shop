import React from 'react'
// @ts-expect-error - HiUI type declarations issue
import Carousel from '@hi-ui/carousel'

// 图片数据类型定义
export interface CarouselImage {
  id: string
  src: string
  alt: string
  href?: string
}

// 走马灯组件的属性
export interface ProductCarouselProps {
  images: CarouselImage[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * 图片展示走马灯组件
 * 基于 hiui carousel 实现，用于展示图片轮播
 */
export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showArrows = true,
  className = '',
  style = {}
}) => {
  // 生成走马灯内容
  const generateCarouselContent = () => {
    return images.map((image) => (
      <div
        key={image.id}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: image.href ? 'pointer' : 'default'
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
    ))
  }

  // 如果没有图片数据，显示空状态
  if (!images || images.length === 0) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        color: '#999',
        fontSize: '16px'
      }}>
        暂无图片数据
      </div>
    )
  }

  return (
    <div 
      className={`product-carousel ${className}`}
      style={{
        width: '100%',
        maxWidth: '1200px',
        height: '400px',
        borderRadius: '8px',
        overflow: 'hidden',
        ...style
      }}
    >
      <Carousel
        autoplay={autoPlay}
        autoplaySpeed={interval}
        dots={showDots}
        arrows={showArrows}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        pauseOnHover={true}
        style={{ height: '100%' }}
      >
        {generateCarouselContent()}
      </Carousel>
    </div>
  )
}

export default ProductCarousel
