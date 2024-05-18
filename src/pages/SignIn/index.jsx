//ISSUE: Poner los ***************** en el password

import { useContext, useState, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from "../../Components/layout"
//import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'; 

function SignIn() {
  const context =useContext(ShoppingCartContext)
  const [typeOfView, setTypeOfView] = useState('log-in')
  const form = useRef(null)

  // Recojemos info de la Cuenta de LocalStorage... si la hay!
  const account      = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Saber si tenemos info de cuenta en localStorage o localState 
  const accountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length !== 0 : false
  const accountInLocalState   = context.account ? Object.keys(context.account).length !== 0 : false
  const hasUserAnAccount = accountInLocalStorage || accountInLocalState
  
  function renderLogIn() { //Vista de LogIn en caso de tener cuenta en Local o State pero no estar logueado
    return (
      <div className='flex flex-col w-80 cursor-auto'>
        <p className='flex flex-col justify-center'>
            <div className='flex'>
              <span className='font-light text-sm mr-10 ml-6'>
                    Email:
              </span>
              <span className='font-bolt text-sm text-sky-500 cursor-not-allowed'>
                    {parsedAccount?.email}
              </span>
            </div>
        </p>
        <p>
            <span className='font-light text-sm mr-2 ml-6'>
                  Password: </span>
            <span className='font-bolt text-sky-500 text-sm p-2 rounded w-80 cursor-not-allowed'>
                  {parsedAccount?.password.slice(0,5) + '***'} {/*Que salga en ***** y solo permita ver con el ojito*/}
            </span>
        </p>
        <Link
          to="/">
            <button
                  className='bg-gray-500/20  hover:bg-gray-500/50 disabled:text-black/40 disabled:border-black/40 w-full rounded-lg p-2 mt-4 mb-2 shadow-lg font-bold'
                  disabled={!hasUserAnAccount}
                  hidden={!hasUserAnAccount}
                  onClick={() => handleSignIn()}>
                  Sign in
            </button>
        </Link>
        <div className='text-center'>
            <a    className='font-light text-xs underline underline-offset-4' href='/'>
                  Forgot my account or password
            </a>
        </div>
        <p className='font-light text-sm text-center text-sky-600'
           hidden={hasUserAnAccount}>
                  If you want to receive offers and updates or create a purchase order, please subscribe below:
        </p>
        <button
                className='bg-gray-500/20 p-2 hover:bg-gray-500/50 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3 shadow-lg'
                disabled={hasUserAnAccount}
                onClick={() => setTypeOfView('create-user-info')}
                hidden={hasUserAnAccount}> 
                  Sign Up
        </button>
        <button
                className='bg-gray-500/20 p-2 hover:bg-gray-500/50 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3 shadow-lg'
                disabled={!hasUserAnAccount}
                onClick={() => setTypeOfView('create-user-info')}
                hidden={!hasUserAnAccount}> 
                  Sign Up whith another Account
        </button>
      </div>
    )
  }

  function renderCreateAccount() { //Renderizamos la vista de entrada de datos de la cuenta
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='font-light text-sm'>Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={parsedAccount?.name}
              className='rounded-lg border border-black placeholder:font-light
              placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='font-light text-sm'>Your email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={parsedAccount?.email}
              className='rounded-lg border border-black
              placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='font-light text-sm'>Your password:</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="******"
              className='rounded-lg border border-black
              placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <Link to="/">
            <button
              className='bg-gray-500/20 p-2 hover:bg-gray-500/50 disabled:text-black/40 disabled:border-black/40 w-full rounded-lg py-3 mt-4 mb-2 shadow-lg'
              onClick={() => createAnAccount()}>
              Create
            </button>
          </Link>
      </form>
    )
  }

 const handleSignIn = () => {
    localStorage.setItem('sign-out', JSON.stringify(false))
    context.setSignOut(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }

 function createAnAccount() {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
    context.setAccount(data)
    localStorage.setItem('account', JSON.stringify(data)) 
    {handleSignIn()}
	}

  const renderView = () => 
    typeOfView === 'create-user-info' 
      ? renderCreateAccount() 
      : renderLogIn()

  return (
      <Layout>
        <h1 className='w-80 text-xl font-medium mb-4 text-center'>
            Welcome
        </h1>
        {renderView()}
      </Layout>
  )
}
  
export { SignIn }
