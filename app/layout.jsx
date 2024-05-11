import '@/assets/styles/global.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'PropertyPulse | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Navbar/>
              <div>{children}</div>
            <Footer/>
        </body>
    </html>
  )
}

export default MainLayout