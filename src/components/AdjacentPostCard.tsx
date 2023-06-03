import { Post } from '@/service/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface AdjacentPostCardProps {
  post: Post
  type: 'prev' | 'next'
}

const arrowIconClass = 'm-4 text-5xl text-yellow-300 transition-all group-hover:text-6xl'

export default function AdjacentPostCard({ post: { path, title, description }, type }: AdjacentPostCardProps) {
  return (
    <Link href={`/posts/${path}`} className="relative max-h-56 w-full bg-black">
      <Image src={`/images/posts/${path}.png`} alt={title} width={150} height={100} className="w-full opacity-50" />
      <div className="group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-10 text-white">
        {type === 'prev' && <FaArrowLeft className={arrowIconClass} />}
        <div className="flex w-full flex-col gap-2 text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={arrowIconClass} />}
      </div>
    </Link>
  )
}
