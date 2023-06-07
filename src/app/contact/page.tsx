import SendMail from '@/components/SendMail'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'
import { SiVelog } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'send Email to Kody',
}

export default function ContactPage() {
  return (
    <section className="p-4 pt-10">
      <h2 className="mb-4 font-serif text-[22px] font-bold tracking-tight text-black dark:text-white">Email me</h2>
      <SendMail />
      <h2 className="mb-4 font-serif text-[22px] font-bold tracking-tight text-black dark:text-white">My Channel</h2>
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:gap-2">
        <Link href={'https://github.com/KodywiththeK'} className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900">
          <div className="flex items-center">
            <BsGithub size={20} />
            <div className="ml-3">GitHub</div>
          </div>
          <GoLinkExternal size={20} />
        </Link>
        <Link href={'https://velog.io/@kodskm'} className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900">
          <div className="flex items-center">
            <SiVelog size={20} />
            <div className="ml-3">Blog</div>
          </div>
          <GoLinkExternal size={20} />
        </Link>
        <Link href={'https://www.youtube.com/@dskim2960'} className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900">
          <div className="flex items-center">
            <BsYoutube size={20} />
            <div className="ml-3">Youtube</div>
          </div>
          <GoLinkExternal size={20} />
        </Link>
      </div>
    </section>
  )
}
