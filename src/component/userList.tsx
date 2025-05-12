"use client";

import { useEffect, useState, useRef } from "react";

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch(`/api/users?page=${page}`);
    const data = await res.json();
    if (data.hasMore === false || data.data.length === 0) {
      setHasMore(false);
    } else {
      setUsers((prev) => [...prev, ...data.data]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchUsers();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    // cleanup
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loading, hasMore]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        {" "}
        Scroll down to Load Users
      </h2>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-sky-300">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">Website</th>
            <th className="border px-4 py-2">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-sky-200 even:bg-sky-100 odd:bg-sky-200">
              <td className="border px-4 py-2 text-center">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.address.city}</td>
              <td className="border px-4 py-2">{user.website}</td>
              <td className="border px-4 py-2">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {hasMore ? (
        <div ref={observerRef} className="h-10 my-40 text-center text-black text-2xl bg-amber-200">
          Scroll down to load more...
        </div>
       ) : (
        <div className="my-40 text-green-700 text-2xl bg-green-400 text-center"> All users loaded</div>
      )} 
    </div>
  );
}
