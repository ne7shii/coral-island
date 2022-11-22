import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='flex flex-col h-screen text-primarytext'>
          <Navbar />
          <div className="flex flex-grow">
            <Sidebar />
            <div className="bg-background w-full h-full">
              <div className="bg-white rounded-tl-3xl w-full h-full pl-12 pt-12">
                {children}
              </div>

            </div>

          </div>
        </div>

      </body>
    </html>
  )
}
