import './globals.css'

export const metadata = {
  title: 'Serena - Mental Health Support for Students',
  description: 'Supporting students on their mental health journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


