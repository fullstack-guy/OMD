import Image from 'next/image'

import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login page</h1>
      <Link href="/my-doctor">
        <div className='border-2 p-2 border-slate-900 '>
        go to my doctor page
        </div>
      </Link>

    </main>
  )
}
