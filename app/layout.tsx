

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ReactQueryProvider } from './ReactQueryProvider'
import { Header } from './header'
import Footer from './footer'


const inter = Inter({ subsets: ['latin'] })

 const metadata: Metadata = {
  title: 'My Doctor',
  description: 'My doctor',
}



 function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ReactQueryProvider>
      <html lang="en">
       
          <body className={inter.className}>
            <Header/>
            {children}
           <Footer/>
            </body>
     
      </html>
    </ReactQueryProvider>

  )
}
export { RootLayout as default, metadata }