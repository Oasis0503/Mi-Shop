export interface CarouselItem {
  id: string
  src: string
  alt: string
  href: string
}

export const carouselData: CarouselItem[] = [
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
