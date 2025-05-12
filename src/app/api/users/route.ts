// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url) //to search for page
  const page = Number(searchParams.get('page')) || 1 
  const limit = 20
  const start = (page - 1) * limit

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const baseUsers = await res.json()

    const fakeUsers = Array(limit).fill(baseUsers).flat().map((user, i) => ({
      ...user,
      id: i + 1,
      name: `${user.name} ${i + 1}`,
    }))

    const all100 = Array(limit).fill(fakeUsers).flat().map((user, i) => ({
      ...user,
      id: i + 1,
      name: `${user.name} ${i + 1}`,
    }))

    const paginated = all100.slice(start, start + limit)

    return NextResponse.json({
      data: paginated,
      total: all100.length,
    })
  } catch {
    return NextResponse.json({ error: 'Fetch error' }, { status: 500 })
  }
}
