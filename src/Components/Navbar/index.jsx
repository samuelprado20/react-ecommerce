import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

export default function Navbar () {
  const activeStyle = 'underline  underline-offset-4'
  const isRouteActive = (isActive) => isActive ? activeStyle : undefined

  const {
    counter,
    isUserSignedIn,
    handleLogIn,
    account
  } = useContext(ShoppingCartContext)

  const userEmail = isUserSignedIn ? account?.email : null

  const renderView = () => {
    if (isUserSignedIn) {
      return (
        <>
          <li className='text-black/60'>
            {userEmail}
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => isRouteActive(isActive)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => isRouteActive(isActive)}
            >
              My account
            </NavLink>
          </li>
          <li>
            <button onClick={() => handleLogIn('signOut')}>
              Sign Out
            </button>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Sign In
          </NavLink>
        </li>
      )
    }
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/other'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Other
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        {renderView()}
        <li className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <div>{counter}</div>
        </li>
      </ul>
    </nav>
  )
}
