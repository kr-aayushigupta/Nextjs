'use client'

import dynamic from 'next/dynamic'

const UserList = dynamic(() => import('@/component/userList'), {
  ssr: false,
  loading: () => <p>Loading component...</p>,
})

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto">
      <UserList />
    </main>
  )
}
