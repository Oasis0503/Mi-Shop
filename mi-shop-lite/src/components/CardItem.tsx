import React from 'react'

export interface CardItemProps {
  name: string
  imageSrc: string
  placeholderSrc: string
  subtitle?: string
}

export const CardItem: React.FC<CardItemProps> = ({ name, imageSrc, placeholderSrc, subtitle }) => {
  return (
    <div className="dropdown-card" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      width: 'clamp(160px, 14vw, 220px)',
      padding: '12px 16px',
      backgroundColor: '#fff'
    }}>
      <img
        src={imageSrc || placeholderSrc}
        alt={name}
        style={{
          width: 'clamp(110px, 9vw, 160px)',
          height: 'auto',
          aspectRatio: '1 / 1',
          objectFit: 'cover',
          borderRadius: 8,
          backgroundColor: '#f5f5f5'
        }}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          if (!img.src.includes('placeholder.svg')) {
            img.src = placeholderSrc
          }
        }}
      />
      <span style={{ color: '#333', fontSize: 14, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{name}</span>
      {subtitle ? (
        <span style={{ color: '#ff6700', fontSize: 14, fontWeight: 600 }}>{subtitle}</span>
      ) : null}
    </div>
  )
}

export default CardItem


