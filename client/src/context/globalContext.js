import { useState, createContext } from 'react'

const GlobalContext = createContext()
const GlobalContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ type: null, message: null })
  return (
    <GlobalContext.Provider value={{ alert, setAlert }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, GlobalContextProvider }
