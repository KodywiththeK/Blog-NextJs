import Hero from '@/components/Hero'
import React from 'react'

export default function loading() {
  return (
    <>
      <Hero />
      <section className="m-4">
        <h2 className="my-2 text-2xl font-bold">Featured Post</h2>
        <ul className="xl:grid-cols5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index}>
              <article className="overflow-hidden rounded-md shadow-md transition-all hover:shadow-2xl">
                <div className="flex h-[165px] w-full  bg-neutral-200">
                  <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" style={{ margin: '0 auto', textAlign: 'center', display: 'inline-block', paddingLeft: '80px' }}>
                    <circle fill="#fff" stroke="none" cx={6} cy={50} r={6}>
                      <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
                    </circle>
                    <circle fill="#fff" stroke="none" cx={26} cy={50} r={6}>
                      <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
                    </circle>
                    <circle fill="#fff" stroke="none" cx={46} cy={50} r={6}>
                      <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
                    </circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center p-2">
                  <time className="self-end text-gray-700">{`${new Date(Date.now()).getFullYear()}-${new Date(Date.now()).getMonth() + 1}-${new Date(Date.now()).getDay()}`}</time>
                  <h3 className="text-lg font-bold">Title</h3>
                  <p className="w-full truncate text-center">Description</p>
                  <span className="my-2 rounded-lg bg-green-100 px-2 text-sm">Category</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
