import { NavLink } from 'react-router-dom'
export default function Navbar () {
  const activeStyle = 'underline  underline-offset-4'

  const isRouteActive = (isActive) => isActive ? activeStyle : undefined

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
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
        <li className='text-black/60'>
          user@test.com
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
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isRouteActive(isActive)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛒
        </li>
      </ul>
    </nav>
  )
}
