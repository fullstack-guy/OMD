import type { Metadata } from 'next'
import { Header } from './header'

const metadata: Metadata = {
  title: 'My Doctor',
  description: 'My doctor',
}

function MyDoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export { MyDoctorLayout as default, metadata }
