import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    </>

  ) 
}
