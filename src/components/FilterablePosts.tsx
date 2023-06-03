'use client'
import { Post } from '@/service/posts'
import React, { useState } from 'react'
import Categories from './Categories'
import PostsGrid from './PostsGrid'

interface Props {
  post: Post[]
  categories: string[]
}

const ALL_POSTS = 'All Posts'

export default function FilterablePosts({ post, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS)
  const filtered = selected === ALL_POSTS ? post : post.filter((i) => i.category === selected)

  return (
    <section className="m-4 flex flex-col-reverse md:flex-row">
      <PostsGrid posts={filtered} />
      <Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={setSelected} />
    </section>
  )
}
