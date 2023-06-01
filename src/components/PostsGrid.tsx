import { Post } from '@/service/posts'
import React from 'react'
import PostCard from './PostCard'

interface PostsGridPropsType {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsGridPropsType) {
  return (
    <ul className="xl:grid-cols5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
