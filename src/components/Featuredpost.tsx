import { getFeaturedPosts } from '@/service/posts'
import React from 'react'
import PostsGrid from './PostsGrid'

export default async function Featuredpost() {
  const posts = await getFeaturedPosts()

  return (
    <section className="m-4">
      <h2 className="my-2 text-2xl font-bold">Featured Post</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
