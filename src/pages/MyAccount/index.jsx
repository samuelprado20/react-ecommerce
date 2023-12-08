import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

export default function MyAccount () {
  const { account, setAccount } = useContext(ShoppingCartContext)
  const [showEditInfo, setShowEditInfo] = useState(false)
  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    setAccount(data)
  }

  const edit = () => {
    editAccount()
    setShowEditInfo(false)
  }

  const renderUserInfo = () => {
    return (
      <div className='flex flex-col gap-3 mt-4'>
        <p>Name: {account.name}</p>
        <p>Email: {account.email}</p>
        <button
          onClick={() => setShowEditInfo(true)}
          className='bg-black text-white rounded-lg h-10'
        >
          Edit account
        </button>
      </div>
    )
  }

  const renderEditInfo = () => {
    return (
      <>
        <div className='flex h-6 w-80 cursor-pointer mt-4' onClick={() => setShowEditInfo(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <p>Go back</p>
        </div>
        <form ref={form} className='flex flex-col gap-4 w-80 mt-6'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='font-light text-sm'>Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={account.name}
              placeholder="Peter"
              className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='font-light text-sm'>Your email:</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={account.email}
              placeholder="user@mail.com"
              className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='font-light text-sm'>Your password:</label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={account.password}
              placeholder="******"
              className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <button
            className='bg-black text-white w-full rounded-lg py-3'
            onClick={() => edit()}>
            Edit
          </button>
        </form>
      </>
    )
  }

  const renderView = () => showEditInfo ? renderEditInfo() : renderUserInfo()

  return (
    <Layout>
      <h1>My Account</h1>

      {renderView()}
    </Layout>
  )
}
