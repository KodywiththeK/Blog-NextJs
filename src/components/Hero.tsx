import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImage from '../../public/images/profileImage.jpg'

export default function Hero() {
  return (
    <section className="text-center">
      <Image className="mx-auto aspect-square rounded-full object-cover" src={profileImage} alt="pic of the author" width={250} height={250} priority />
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I'm Kody"}</h2>
      <h3 className="text-xl font-semibold">Frontend Engineer</h3>
      <p>일상 속 스미는, 선한 영향력을 만드는 사람</p>
      <Link href={'/contact'}>
        <button className="my-1 mt-2 rounded-xl bg-yellow-500 px-4 py-2 font-bold">Contact me</button>
      </Link>
    </section>
  )
}
