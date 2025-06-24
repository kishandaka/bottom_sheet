import React, {createContext, useContext, useState} from 'react'

interface AppStateContextProps {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  startPoint: any
  endPoint: any
  setStartEndPoint: (id: number, value: any) => void
}

const AppStateContext = createContext<AppStateContextProps>({
  isLoading: false,
  setIsLoading: () => {},
  startPoint: null,
  endPoint: null,
  setStartEndPoint: () => {}
})

interface AppStateContextProviderProps {
  children: React.ReactNode
}
export const AppStateContextProvider = ({children}: AppStateContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [startPoint, setStartPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')

  const setStartEndPoint = (type: number, value: any) => {
    if (type === 0) {
      setStartPoint(value)
    }

    if (type === 1) {
      setEndPoint(value)
    }
  }

  return (
    <AppStateContext.Provider
      value={{isLoading, setIsLoading, startPoint, endPoint, setStartEndPoint}}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default () => useContext(AppStateContext)
