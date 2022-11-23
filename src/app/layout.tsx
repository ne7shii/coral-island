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
          {/* <div className='h-14 bg-background w-screen '/> */}
          <div className="flex flex-row flex-grow h-full">
            <Sidebar />
            <div className="bg-background w-full h-full pt-14 pb-4">
              <div className="bg-white rounded-l-3xl w-full h-full pl-12 pt-12 overflow-auto " >
                {children}
              </div>

            </div>

          </div>
        </div>

      </body>
    </html>
  )
}
