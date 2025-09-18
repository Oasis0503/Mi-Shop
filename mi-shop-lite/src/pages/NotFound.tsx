import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Mi Shop</title>
      </Helmet>
      <div style={{ padding: 16 }}>404 Not Found</div>
    </>
  )
}


