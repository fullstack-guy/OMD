'use client'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

type Inputs = any

const defaultValues = {
  first_name: 'John',
  last_name: 'joseph',
  username: 'johnjoseph',
  email: 'john@example.com',
  password: 'abc12345',
  // confirm_password: 'abc12345',
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues })

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return axios.post('http://3.21.254.150/user', data)
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(defaultValues)
    console.log(mutation)
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <div className="w-full mr-2">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="first_name"
                    type="first_name"
                    autoComplete="first_name"
                    {...register('first_name', { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>
              <div className="w-full ml-2">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last_name"
                    type="last_name"
                    autoComplete="last_name"
                    {...register('last_name', { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full mr-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    type="username"
                    autoComplete="username"
                    {...register('username', { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>
              <div className="w-full ml-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email', { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-full mr-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register('password', { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="w-full ml-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm-password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    type="confirm-password"
                    autoComplete="current-confirm-password"
                    {...register('confirm-password')}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?{' '}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600
            hover:text-indigo-500"
            >
              Sign In here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
