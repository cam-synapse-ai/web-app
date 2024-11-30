'use client'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import { Box, CssBaseline } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    mono: 'var(--font-geist-mono)',
  },
})

export function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {children}
      </Box>
    </MUIThemeProvider>
  )
}