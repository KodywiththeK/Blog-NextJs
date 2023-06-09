import { Post } from '@/service/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PostCard({ post: { title, description, date, category, path } }: { post: Post }) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden rounded-md shadow-md transition-all hover:shadow-2xl">
        <Image src={`/images/posts/${path}.png`} alt={title} width={300} height={165} className="w-full" />
        <div className="flex flex-col items-center p-2">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="my-2 rounded-lg bg-green-100 px-2 text-sm">{category}</span>
        </div>
      </article>
    </Link>
  )
}
