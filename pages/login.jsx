import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LoginIcon from '../assets/auth.svg';
import Button from '../components/Button';

const Login = ({}) => {
  return (
    <div className="lg:fixed h-screen overflow-hidden bg-medium w-full">
      <div className="flex h-full bg-white">
        <div className="w-full lg:w-2/3 h-full px-7 lg:px-10 pt-5 pb-10 lg:max-w-xl mx-auto xl:mx-0 overflow-y-auto 2xl:px-24">
          <Link href="/">
            <a className="-ml-3">
              <Image
                src="/images/logo.png"
                width={250}
                height={40}
                className="object-cover transform scale-90 lg:scale-100"
              />
            </a>
          </Link>
          <h1 className="text-3xl lg:text-4xl pt-16 font-bold text-gray-800">Sign in.</h1>
          <p className="lg:text-xl text-gray-400 mt-3 max-w-sm">
            Log in with the data you entered during in registration
          </p>

          <form action="" className="mt-10 lg:mt-20">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 font-semibold">
                Enter Your Email or Username
              </label>
              <input
                type="text"
                placeholder="Enter Your Email or Username"
                className="py-3.5 bg-white px-7 border focus:border-primary outline-none mt-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="email" className="text-gray-600 font-semibold">
                Enter Your Password
              </label>
              <input
                type="text"
                placeholder="At least 8 characters"
                className="py-3.5 bg-white px-7 border focus:border-primary outline-none mt-2 rounded-lg"
              />
            </div>
            <Link href="/dashboard">
              <a>
                <Button className="w-full bg-primary border-primary py-3.5 text-white mt-10">Sign in</Button>
              </a>
            </Link>
          </form>
          <div className="py-10 lg:py-16 border-b flex flex-col items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 border-2 border-primary rounded-lg focus:border-primary text-primary"
              />
              <span className="ml-2 font-medium text-sm lg:text-base text-gray-500">
                Use password for logging into my account
              </span>
            </label>
            <Link href="/">
              <a className="text-primary text-md lg:text-lg mt-4">Forgot Password?</a>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="/register">
              <a>
                <Button className="bg-white border-primary py-3.5 px-12 text-primary mt-10">Sign up</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full h-full xl:block hidden relative bg-medium pt-10 2xl:pt-32 px-32 text-center">
          <span className="text-gray-500 font-semibold text-2xl">Nice to see you again</span>
          <h1 className="text-primary text-6xl font-bold mt-8">Welcome back</h1>
          <LoginIcon height={570} className="mx-auto mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Login;
