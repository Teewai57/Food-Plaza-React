import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer aria-label="Site Footer" id="footer" className=" bg-[#f0eded]">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-600 sm:justify-start">
      <a href="#home" class="flex items-center logo">
        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Food<span className="text-green">Plaza</span> </span>
    </a>
      </div>

      <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer
