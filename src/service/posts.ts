import { readFile } from 'fs/promises'
import path from 'path'

export type Post = {
  title: string
  description: string
  date: Date
  category: string
  path: string
  featured: boolean
}

export type PostContent = Post & { content: string }

// 모든 데이터 가져오기
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
}

// featured post 데이터 가져오기
export async function getFeaturedPosts(): Promise<Post[]> {
  return await getAllPosts().then((posts) => posts.filter((post) => post.featured))
}

// None-featured post 데이터 가져오기
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return await getAllPosts().then((posts) => posts.filter((post) => !post.featured))
}

// post 마크다운 데이터 가져오기
export async function getPostData(fileName: string): Promise<PostContent> {
  // 현재 경로로 접근
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`)
  const metaData = await getAllPosts().then((posts) => posts.find((post) => post.path === fileName))
  if (!metaData) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`)
  const content = await readFile(filePath, 'utf-8')
  return { ...metaData, content }
}
