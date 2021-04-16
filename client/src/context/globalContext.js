import { useState, createContext } from 'react'

const GlobalContext = createContext()
const GlobalContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ type: null, message: null })
  const [loading, setLoading] = useState(false)
  return (
    <GlobalContext.Provider value={{ alert, setAlert, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, GlobalContextProvider }
