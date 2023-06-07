import FilterablePosts from '@/components/FilterablePosts'
import { getAllPosts } from '@/service/posts'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'full stack articles',
}

export default async function PostsPage() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map((i) => i.category)))

  return <FilterablePosts post={posts} categories={categories} />
}
