import React from 'react'

type Props = {
  categories: string[]
  selected: string
  onClick: (category: string) => void
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="mb-8 md:ml-6">
      <h2 className="border-spacing-2 border-b-[2px] border-green-500 text-xl font-bold">Category</h2>
      <ul className="mt-2 flex flex-row flex-wrap gap-2 md:flex-col">
        {categories.map((category) => (
          <li key={category} onClick={() => onClick(category)} className={`rounded-lg px-3 py-1 ${selected === category ? 'bg-green-300' : 'bg-green-100'} cursor-pointer text-center hover:bg-green-300`}>
            {category}
          </li>
        ))}
      </ul>
    </section>
  )
}
