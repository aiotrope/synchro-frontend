import * as React from 'react'

export const CommomContext = React.createContext()

export const CommomProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const isComponentMounted = React.useRef(true)

  React.useEffect(() => {
    return () => {
      isComponentMounted.current = false
    }
  }, [])

  const mounted = isComponentMounted

  const value = {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    mounted,
  }

  return (
    <CommomContext.Provider value={value}>{children}</CommomContext.Provider>
  )
}

export const useCommom = () => {
  const {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    mounted,
  } = React.useContext(CommomContext)
  return {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    mounted,
  }
}