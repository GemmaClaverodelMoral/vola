import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from "../../Components/layout"

function MyAccount() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('show-account')  // view puede variar entre 'show-account' o 'edit-account'
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    const form = useRef(null)

    function editAccount() {
      const formData = new FormData(form.current)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }
      //Uptade account
      localStorage.setItem('account', JSON.stringify(data)) 
      context.setAccount(data)
    }

    function renderShowAccount () {

      return (
        <div className='flex flex-col w-80'>
          <p>
            <span className='font-light text-sm mr-9 ml-6'>Name: </span>
            <span className='font-bolt text-sm text-sky-500 cursor-not-allowed'>{parsedAccount?.name}</span>
          </p>
          <p>
            <span className='font-light text-sm mr-10 ml-6'>Email: </span>
            <span className='font-bolt text-sm text-sky-500 cursor-not-allowed' >{parsedAccount?.email}</span>
          </p>
          <p>
            <span className='font-light text-sm mr-5 ml-6'>Password: </span>
            <span className='font-bolt text-sm text-sky-500 cursor-not-allowed' >{parsedAccount?.password.slice(0, 5) + '***'}</span>
          </p>
          <button
            className='bg-gray-500/20 p-2 hover:bg-gray-500/50 disabled:text-black/40 disabled:border-black/40 w-full rounded-lg py-3 mt-4 mb-2 shadow-lg'
            onClick={() => setView('edit-account')}>
            Edit
          </button>
        </div>
      )
    }

    function renderEditAccount() { //Renderizamos la vista de entrada de datos de la cuenta

      return (
        <form ref={form} className='flex flex-col gap-4 w-80'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='font-light text-sm'>Your name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={parsedAccount?.name}
                placeholder="Peter"
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
                defaultValue={parsedAccount?.email}
                placeholder="hi@helloworld.com"
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
                defaultValue={parsedAccount?.password}
                placeholder="******"
                className='rounded-lg border border-black
                placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
              />
            </div>
            <button
              className='bg-gray-500/20 p-2 hover:bg-gray-500/50 disabled:text-black/40 disabled:border-black/40 w-full rounded-lg py-3 mt-4 mb-2 shadow-lg'
              onClick={() => {setView('show-account'), editAccount()}}>
              Update
            </button>
        </form>
      )
    }    

    const renderView = () => view === 'edit-account' ? renderEditAccount() : renderShowAccount()

    return (
        <Layout>
        <h1 className='w-80 text-xl font-medium mb-4 text-center'>
            My Account
        </h1>
          {renderView()}
        </Layout>
    )
  }
  
  export { MyAccount }