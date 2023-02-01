import * as React from 'react'

export const AuthStorageContext = React.createContext()

export const AuthStorageProvider = ({ children }) => {
  const [access, setAccess] = React.useState(null)
  const [refresh, setRefresh] = React.useState(null)

  const value = {
    access,
    setAccess,
    refresh,
    setRefresh,
  }

  return (
    <AuthStorageContext.Provider value={value}>
      {children}
    </AuthStorageContext.Provider>
  )
}

export const useAuthStorage = () => {
  const { access, setAccess, refresh, setRefresh } =
    React.useContext(AuthStorageContext)

  return { access, setAccess, refresh, setRefresh }
}
