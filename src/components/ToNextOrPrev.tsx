import { getAllPosts, PostContent } from '@/service/posts'
import React from 'react'
import AdjacentPostCard from './AdjacentPostCard'

export default async function ToNextOrPrev({ post: { prev, next } }: { post: PostContent }) {
  // const getNextOrPrev = async (pathName: string) => {
  //   const allPosts = await getAllPosts()
  //   const curPostIdx = allPosts.findIndex((i) => i.path === pathName)
  //   if (curPostIdx === 0) return { next: allPosts[1] }
  //   if (curPostIdx === allPosts.length - 1) return { prev: allPosts[allPosts.length - 2] }
  //   else return { prev: allPosts[curPostIdx - 1], next: allPosts[curPostIdx + 1] }
  // }

  return (
    <section className="flex w-full justify-between shadow-md">
      {prev && <AdjacentPostCard post={prev} type="prev" />}
      {next && <AdjacentPostCard post={next} type="next" />}
    </section>
  )
}
