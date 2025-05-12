'use client'

import dynamic from 'next/dynamic'


// using dynamic imports- to make sure server side rendering does not happen
const UserList = dynamic(() => import('@/component/userList'), {
  ssr: false,
  loading: () => <p>Loading component...</p>,
})

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto bg-sky-100">
      <UserList />
    </main>
  )
}
