import { useContext, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import logo from '../../../public/images/logo.png'
import { FaBagShopping } from 'react-icons/fa6'
import './Navbar.css'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
   return logOut()
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-background py-3">
      <div className="mx-20">
        <div className="flex justify-between">
          <div className="logo">
            <img className='w-20' src={logo} alt="" />
          </div>
          <div className="flex items-center">
            <div className=" hidden lg:block">
              <ul className='flex space-x-4 '>
                <Link><li className='hover:text-gray-400 font'>Home</li></Link>
                <Link><li className='hover:text-gray-400 font'>About</li></Link>
                <Link><li className='hover:text-gray-400 font'>Service</li></Link>
                <Link><li className='hover:text-gray-400 font'>Blog</li></Link>
                <Link><li className='hover:text-gray-400 font'>Contact</li></Link>
                {
                  user?.email ? <>
                    <Link to={`/bookings`}><li className='hover:text-gray-400 font'>My Orders</li></Link>
                    <Link><button onClick={handleLogOut} className='btn btn-block'>log Out</button></Link>
                  </>
                    :
                    <Link to={`/login`}><li className='hover:text-gray-400 font'>Login</li></Link>
                }
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <button className="rounded-lg border-2 border-[#FF3811] px-5 py-3 text-md text-[#FF3811] duration-200 hover:bg-[#FF3811] hover:text-white font">Appointment</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:hidden  mr-auto">
        <button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/services" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button className="w-full">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

