import React from 'react'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const ThemeContext = React.createContext(
  {} as { theme: boolean; setTheme: React.Dispatch<React.SetStateAction<boolean>> }
)

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<boolean>(false)

  const themeProps = {
    theme,
    setTheme,
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
    </QueryClientProvider>
  )
}

export default Theme
