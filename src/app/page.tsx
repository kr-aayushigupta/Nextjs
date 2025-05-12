'use client'

import dynamic from 'next/dynamic'


// using dynamic imports- to make sure server side rendering does not happen
const UserList = dynamic(() => import('@/component/userList'), {
  ssr: false,
  loading: () => <p className='text-center mt-6 font-bold text-2xl'>Loading !! Please Wait !!</p>,
})

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto bg-sky-100">
      <UserList />
    </main>
  )
}
