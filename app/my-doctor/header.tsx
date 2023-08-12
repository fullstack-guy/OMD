import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 right-0 w-full flex  justify-between items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 p">
              <div className="w-4/5 flex flex-col items-center justify-between pt-4 pb-3">
                <Link href="/my-doctor">
                  {' '}
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
                    Open My Doctor
                  </h1>{' '}
                </Link>

                <div className="pt-4">
                  <Link
                    href="/my-doctor/saved-doctors"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lm font-medium mr-12"
                  >
                    Saved
                  </Link>
                  <Link
                    href="/my-doctor/review"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
                  >
                    Reviews
                  </Link>
                </div>
              </div>
              <div className="relative ml-3 w-1/5">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link
                    href="/my-doctor/account"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    My Account
                  </Link>

                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export { Header }
