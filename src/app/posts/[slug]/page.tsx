import PostContent from '@/components/PostContent'
import ToNextOrPrev from '@/components/ToNextOrPrev'
import { getPostData } from '@/service/posts'
import Image from 'next/image'
import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug)

  return (
    <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
      <Image className="max-h-[500px] w-full object-cover" src={`/images/posts/${post.path}.png`} alt={post.title} width={760} height={420} />
      <PostContent post={post} />
      {/* @ts-expect-error Server Component */}
      <ToNextOrPrev post={post} />
    </article>
  )
}
