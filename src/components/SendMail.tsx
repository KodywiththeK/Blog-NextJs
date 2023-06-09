'use client'
import { sendContactEmail } from '../service/contact'
import { EmailData } from '@/utils/nodemailer'
import React, { FormEvent, useState } from 'react'

export default function SendMail() {
  const mailDataInitialState = {
    from: '',
    subject: '',
    message: '',
  }

  const [banner, setBanner] = useState<{ message: string; state: 'success' | 'error' | 'loading' } | null>(null)
  const [mailData, setMailData] = useState<EmailData>(mailDataInitialState)

  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setBanner({ message: '💌 메일을 전송중입니다.', state: 'loading' })
    sendContactEmail(mailData)
      .then((res) => {
        setBanner({ message: `✅ ${res.message}`, state: 'success' })
        setMailData(mailDataInitialState)
      })
      .catch((res) => {
        setBanner({ message: `❗️ ${res.message}`, state: 'error' })
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null)
        }, 3000)
      })
  }
  return (
    <div className="mb-8 flex w-full flex-col gap-2 rounded-md bg-green-100 p-2 dark:bg-green-800 sm:p-7 md:p-10">
      {banner && banner.state !== 'loading' && <div className={`my-2 rounded-lg ${banner.state === 'success' ? 'bg-green-300' : 'bg-red-200'} p-2 font-semibold`}>{banner.message}</div>}
      {banner && banner.state === 'loading' && <div className={`my-2 rounded-lg bg-yellow-300 p-2 font-semibold`}>{banner.message}</div>}
      <div className=" font-semibold">Your Email</div>
      <input placeholder="yourEmail@gmail.com(필수)" type={'email'} value={mailData.from} onChange={(e) => setMailData({ ...mailData, from: e.target.value })} id="from" name="from" required autoFocus className="mb-2 w-full rounded p-2 placeholder:text-neutral-600 placeholder:opacity-50 focus:outline-none dark:text-neutral-900" />
      <div className=" font-semibold">Title</div>
      <input placeholder="제목을 입력해주세요(필수)" type={'text'} value={mailData.subject} onChange={(e) => setMailData({ ...mailData, subject: e.target.value })} id="suject" name="subject" required className="mb-2 w-full rounded p-2 placeholder:text-neutral-600 placeholder:opacity-50 focus:outline-none dark:text-neutral-900" />
      <div className=" font-semibold">Message</div>
      <textarea name="message" placeholder="보내질 메세지를 입력해주세요(필수)" value={mailData.message} onChange={(e) => setMailData({ ...mailData, message: e.target.value })} id="message" required className="mb-2 h-[300px] w-full rounded p-2 placeholder:text-neutral-600 placeholder:opacity-50 focus:outline-none dark:text-neutral-900" />
      <div className="flex justify-end">
        <button disabled={mailData.from.length === 0 || mailData.message.trim().length === 0 || mailData.subject.trim().length === 0} onClick={(e) => onClickHandler(e)} className="w-[100px] rounded-lg bg-neutral-50 py-2 text-center text-[18px] font-semibold disabled:opacity-50 dark:bg-neutral-600">
          Send
        </button>
      </div>
    </div>
  )
}
