import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Sarte',
  description: 'Isaac Sarte Online Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div id="cursor"></div>
                {children}
            </body>
        </html>
    )
}
