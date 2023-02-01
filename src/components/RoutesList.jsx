import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuthStorage } from '../contexts/AuthContext'
import { Main } from './Main'
import { Login } from './Login'
import { NotFound } from './404'

export const RoutesList = () => {
  const { access } = useAuthStorage()
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/login"
        element={!access ? <Login /> : <Navigate to={'/'} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}