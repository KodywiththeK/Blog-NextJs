import MarkdownViewer from '@/components/MarkdownViewer'
import { getPostData } from '@/service/posts'
import Image from 'next/image'
import React from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'

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
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="ml-2 text-lg font-semibold">{post.date.toString()}</p>
        </div>
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <p className="text-xl font-bold">{post.description}</p>
        <div className="mb-8 mt-4 w-[60%] border-2 border-sky-600"></div>
        <MarkdownViewer>{post.content}</MarkdownViewer>
      </section>
    </article>
  )
}
