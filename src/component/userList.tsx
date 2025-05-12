'use client'

import { useEffect, useState, useRef } from 'react'

export default function UserList() {
  const [users, setUsers] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<HTMLDivElement | null>(null)

  const fetchUsers = async () => {
    setLoading(true)
    const res = await fetch(`/api/users?page=${page}`)
    const data = await res.json()

    if (data.data.length === 0) {
      setHasMore(false)
    } else {
      setUsers((prev) => [...prev, ...data.data])
      setPage((prev) => prev + 1)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchUsers() 
  }, [])

  useEffect(() => {
    if(page==1) return;
    if (!observerRef.current || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchUsers()
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(observerRef.current)

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [loading, hasMore])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center"> Scroll down to Load Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-3 border rounded shadow-sm bg-sky-200">
            <span className="font-semibold">{user.name}</span> - {user.website} - {user.email} - {user.address.city}
          </li>
        ))}
      </ul>
      

      {hasMore ? (
        <div ref={observerRef} className="h-10 my-40 text-center text-gray-400">
           Scroll down to load more...
        </div>
      ) : (
        <p className="mt-4 text-green-500"> All users loaded</p>
      )}
    </div>
  )
}
