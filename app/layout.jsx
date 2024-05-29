import '@/assets/styles/global.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
    title: 'PropertyPulse | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
          <body>
              <Navbar/>
                <div>{children}</div>
              <Footer/>
              <ToastContainer />
          </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout