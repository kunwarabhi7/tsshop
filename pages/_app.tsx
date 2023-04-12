import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import type { AppProps } from 'next/app'
import { ShoppingCartProvider } from '@/context/ShoppingCartContex'

export default function App({ Component, pageProps }: AppProps) {
  return (
<ShoppingCartProvider >
    <NavBar />
    <Component {...pageProps} />
    
</ShoppingCartProvider>

  ) 
}
