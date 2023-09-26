import { Navigation } from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head />
      <head>
        <Script src="https://cdn.tailwindcss.com" />
      </head>
      <body className={`${ inter.className } bg-slate-400`}>
        <Navigation />
        <div className='container p-4'>{ children }</div>
      </body>
    </html>
  )
}
