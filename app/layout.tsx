// app/layout.tsx
import './globals.css'
 

export const metadata = {
  title: 'ackresponse demo project',
  description: 'ackresponse demo project',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}