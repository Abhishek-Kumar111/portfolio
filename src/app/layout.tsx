import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "Portfolio | Abhishek Kumar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'