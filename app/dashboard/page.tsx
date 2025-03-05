"use client"
import { useUserIdMutation } from '@/lib/redux_toolkit/features/chatApiSlice'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const id="67c88421ab3c0f6d82206aef"
  const [userId] = useUserIdMutation()
  useEffect(() => {
    userId(id)
  },[])
  
  return (
    <div>
      Hi
    </div>
  )
}

export default Dashboard
