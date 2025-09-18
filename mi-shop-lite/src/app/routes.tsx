import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'

const Home = lazy(() => import('@/pages/Home'))
const SearchList = lazy(() => import('@/pages/SearchList'))
const ProductDetail = lazy(() => import('@/pages/ProductDetail'))
const Cart = lazy(() => import('@/pages/Cart'))
const Checkout = lazy(() => import('@/pages/Checkout'))
const ServiceCenter = lazy(() => import('@/pages/ServiceCenter'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/service" element={<ServiceCenter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}


