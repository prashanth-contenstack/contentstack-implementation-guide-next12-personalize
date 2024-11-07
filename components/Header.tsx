import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex w-full items-center justify-between py-6">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://images.contentstack.io/v3/assets/blt7359e2a55efae483/blt518e5105a0686696/663e30a08f19535905e50af2/Logo.svg"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
          </button>
        </div>
        
        <div className='flex flex-row items-center justify-between gap-10'>

            <a href="/" className="text-sm/6 font-semibold text-gray-900">
                Home
            </a>
            <a href="/marketer" className="text-sm/6 font-semibold text-gray-900">
                Marketer
            </a>
            <a href="/developer" className="text-sm/6 font-semibold text-gray-900">
                Developer
            </a>
        </div>
      </nav>
    </header>
  )
}
