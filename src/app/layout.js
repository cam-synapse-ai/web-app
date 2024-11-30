import localFont from "next/font/local"
import "./globals.css"
import { AppSidebar } from "./components/sidebar/app-sidebar"
import { ThemeProvider } from "./components/providers/theme-provider"
import { Box } from '@mui/material'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Synapse AI",
  description: "Created By Synapse Co.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <AppSidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: `${240}px`,
              minHeight: '100vh'
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}