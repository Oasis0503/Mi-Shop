import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProvidersProps = { children: React.ReactNode }

const queryClient = new QueryClient()

export function AppProviders({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  )
}


