"use client"

import withAuth from '@/component/withAuth'
import React from 'react'

function clientsidehoc() {
  return (
    <div>
        <h3 className='text-2xl font-bold text-center mt-10'>This route is protected by client side HOC</h3>
    </div>
  )
}

export default withAuth(clientsidehoc);