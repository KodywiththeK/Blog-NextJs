import Featuredpost from '@/components/Featuredpost'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Featuredpost />
    </>
  )
}