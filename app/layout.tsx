import './globals.css'
// import { Nanum_Myeongjo } from 'next/font/google'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
// const nanum = Nanum_Myeongjo({ weight: "700", subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col p-24">
          <h1>practice noticing & writing sentences</h1>

          <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
            <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <ul className="space-y-2">
                <li>
                  <Link
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    href="/">
                      Home
                    </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    href="/about">
                      About
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {children}
        </main>
      </body>
    </html>
  )
}
