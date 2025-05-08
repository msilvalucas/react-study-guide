import { createContext } from 'react'

export type CountContextType = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const CountContext = createContext<CountContextType | undefined>({} as CountContextType)
