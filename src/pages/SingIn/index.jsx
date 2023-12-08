import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

export default function SignIn () {
  const [showSignUp, setShowSignUP] = useState(false)
  const { handleLogIn, account, setAccount } = useContext(ShoppingCartContext)
  const navigate = useNavigate()

  const userHasAccount = account ? Object.keys(account).length > 0 : false

  const handleSignIn = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const { email, password } = Object.fromEntries(formData.entries())

    // check if user exists in localstorage
    const account = JSON.parse(localStorage.getItem('account'))
    // if email & password are correct, sign in
    if (account) {
      if (account.email === email && account.password === password) {
        handleLogIn('signIn')
        navigate('/', { replace: true })
      }
    }
  }

  const handleSignUp = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    window.localStorage.setItem('account', JSON.stringify(data))
    setAccount(data)
    setShowSignUP(false)
  }

  const SignInForm = () => {
    return (
      <>
        <h2 className='text-lg'>Welcome</h2>
        <div className='flex flex-col justify-center items-center'>
          <form onSubmit={handleSignIn} className='flex flex-col gap-1 w-80 mt-8'>
            <label htmlFor='email'>Email</label>
            <input
              required
              type="email"
              id='email'
              name='email'
              className='border border-black rounded-lg h-8 p-2 text-center'
            />

            <label htmlFor='password'>Password</label>
            <input
              required
              type="password"
              id='password'
              name='password'
              className='border border-black rounded-lg h-8 p-2 text-center'
            />

            <input
              type="submit"
              value='Sign In'
              className='bg-black text-white rounded-lg mt-3 h-10 disabled:bg-black/40'
              disabled={!userHasAccount}
            />
          </form>
          <p className='mt-3'>
            Do not have an account?
          </p>
          <button
            className='border border-black disabled:text-black/40 disabled:border-black/40 w-full rounded-lg mt-4 py-2 cursor-pointer'
            onClick={() => setShowSignUP(true)}
            disabled={userHasAccount}
          >
            Sign up
          </button>
        </div>
      </>
    )
  }

  const SignUpForm = () => {
    return (
      <>
        <div className='flex items-center relative w-80 mb-6'>
          <div className='h-6 w-6 cursor-pointer mr-20' onClick={() => setShowSignUP(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
        <h1 className='ml-8'>Sign up</h1>
      </div>
        <form onSubmit={handleSignUp} className='flex flex-col gap-1 w-80 mt-8'>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            id='name'
            name='name'
            placeholder='Peter'
            className='border border-black rounded-lg h-8 p-2 text-center'
          />

          <label htmlFor="">Your email</label>
          <input
            type="email"
            id='email'
            name='email'
            placeholder='user@mail.com'
            className='border border-black rounded-lg h-8 p-2 text-center'
          />

          <label htmlFor="">Your password</label>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='********'
            className='border border-black rounded-lg h-8 p-2 text-center'
          />

          <input type="submit" value='Sign Up' className='bg-black text-white rounded-lg mt-3 h-10'/>
        </form>
      </>
    )
  }

  return (
    <Layout>
      { showSignUp
        ? <SignUpForm />
        : <SignInForm />
      }
    </Layout>
  )
}
