"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed w-full z-50 px-4 py-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between h-10">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RaptorTech
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              <Link 
                href="/why-raptortech"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/why-raptortech' 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600 transition-colors'
                }`}
              >
                Why RaptorTech?
              </Link>
              
              <Link 
                href="/opportunities"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/opportunities'
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600 transition-colors'
                }`}
              >
                Latest Opportunities
              </Link>

              <Link 
                href="/candidate-hub"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/candidate-hub'
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600 transition-colors'
                }`}
              >
                Candidate Hub
              </Link>

              <Link 
                href="/employer-hub"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/employer-hub'
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600 transition-colors'
                }`}
              >
                Employer Hub
              </Link>

              <Link 
                href="/resources"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/resources'
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600 transition-colors'
                }`}
              >
                Resources
              </Link>
            </div>

            {/* Virtual Coffee Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/virtual-coffee"
                className="group px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                Virtual Coffee?
                <span className="inline-flex items-center justify-center w-5 h-5">
                  ☕
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="space-y-2">
                <Link
                  href="/why-raptortech"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Why RaptorTech?
                </Link>
                <Link
                  href="/opportunities"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Latest Opportunities
                </Link>
                <Link
                  href="/candidate-hub"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Candidate Hub
                </Link>
                <Link
                  href="/employer-hub"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Employer Hub
                </Link>
                <Link
                  href="/resources"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/virtual-coffee"
                  className="block w-full px-4 py-2 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Virtual Coffee? ☕
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 