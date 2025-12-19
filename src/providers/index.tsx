import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { ReactLenis } from 'lenis/react'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
