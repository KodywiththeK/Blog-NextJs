'use client'
import { sendContactEmail } from '../service/contact'
import { EmailData } from '@/utils/nodemailer'
import { validateData } from '@/utils/validation'
import React, { useState } from 'react'

export default function SendMail() {
  const mailDataInitialState = {
    from: '',
    subject: '',
    message: '',
  }

  const [err, setErr] = useState('')
  const errorHandler = (error: string) => {
    console.log(error)
    if (typeof error === 'string' && error.includes('valid email address.')) {
      setErr('❗️ 올바른 형식의 메일 주소를 입력해주세요.')
    }
    if (typeof error === 'string' && error.includes('메일 전송에 실패함')) {
      setErr('❗️ 메일 전송에 실패했습니다.')
    }
    if (typeof error === 'string' && error.includes('성공적')) {
      setErr('✅ 메일을 성공적으로 전송했습니다.')
    }
    setTimeout(() => {
      setErr('')
    }, 3000)
  }

  const [mailData, setMailData] = useState<EmailData>(mailDataInitialState)
  const onClickHandler = async () => {
    try {
      const res = await validateData(mailData)
      if (res === true) {
        const result = await sendContactEmail(mailData)
        errorHandler(result.message)
      } else {
        errorHandler(res as string)
      }
    } catch (err) {
      errorHandler(String(err))
      console.error(err)
    }
    setMailData(mailDataInitialState)
  }
  return (
    <div className="mb-8 flex w-full flex-col gap-2 rounded-md bg-green-200 p-2 dark:bg-green-800 sm:p-7 md:p-10">
      {err && err.length > 0 && <div className={`my-2 rounded-lg ${err.includes('성공') ? 'bg-green-200' : 'bg-red-200'} p-2 font-semibold`}>{err}</div>}
      <div className=" font-semibold">Your Email</div>
      <input placeholder="yourEmail@gmail.com(필수)" type={'email'} value={mailData.from} onChange={(e) => setMailData({ ...mailData, from: e.target.value })} className="mb-2 w-full rounded p-2 placeholder:text-neutral-600 placeholder:opacity-50 focus:outline-none dark:text-neutral-900" />
      <div className=" font-semibold">Title</div>
      <input placeholder="제목을 입력해주세요(필수)" type={'text'} value={mailData.subject} onChange={(e) => setMailData({ ...mailData, subject: e.target.value })} className="mb-2 w-full rounded p-2 placeholder:text-neutral-600 placeholder:opacity-50 focus:outline-none dark:text-neutral-900" />
      <div className=" font-semibold">Message</div>
      <textarea name="message" placeholder="보내질 메세지를 입력해주세요(필수)" value={mailData.message} onChange={(e) => setMailData({ ...mailData, message: e.target.value })} className="mb-2 h-[300px] w-full rounded p-2 placeholder:text-neutral-600 placeholder:opacity-50 focus:outline-none dark:text-neutral-900" />
      <div className="flex justify-end">
        <button disabled={mailData.from.length === 0 || mailData.message.trim().length === 0 || mailData.subject.trim().length === 0} onClick={onClickHandler} className="w-[100px] rounded-lg bg-neutral-50 py-2 text-center text-[18px] font-semibold disabled:opacity-50 dark:bg-neutral-600">
          Send
        </button>
      </div>
    </div>
  )
}
