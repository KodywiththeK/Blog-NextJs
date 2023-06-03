import React from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'
import MarkdownViewer from '@/components/MarkdownViewer'
import { PostContent } from '@/service/posts'

export default function PostContent({ post }: { post: PostContent }) {
  return (
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
  )
}
